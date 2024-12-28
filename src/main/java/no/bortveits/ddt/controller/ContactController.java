package no.bortveits.ddt.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import no.bortveits.ddt.model.ContactForm;
import no.bortveits.ddt.model.ReCaptchaRequest;
import no.bortveits.ddt.model.ReCaptchaResponse;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/contact")
public class ContactController {
	private final WebClient webClient;
	private final String recaptchaVerificationUrl;
	private final String recaptachaSecret;
	

	public ContactController(
		@Value("${google.recaptcha.url}") String recaptchaVerificationUrl,
		@Value("${google.recaptcha.secret}") String recaptchaSecret
	) {
		this.recaptchaVerificationUrl = recaptchaVerificationUrl;
		this.recaptachaSecret = recaptchaSecret;
		this.webClient = WebClient.create();
	}

	@PostMapping("/receive-contact-form")
	public double ReceiveContactForm(ContactForm contactForm) {
		return validCaptcha(
			this.recaptchaVerificationUrl, 
			contactForm.getRecaptcha(), 
			this.recaptachaSecret);
	}

	private double validCaptcha(final String uri, final String token, final String secret) {
		var obj = new ReCaptchaRequest();
		obj.setResponse(token);
		obj.setSecret(secret);
		var fullUri = uri
			.concat("?secret=").concat(secret)
			.concat("&response=").concat(token);
		var response = this.webClient
			.post()
			.uri(fullUri)
			.contentType(MediaType.APPLICATION_JSON)
			.retrieve()
			.bodyToMono(String.class)
			.block();
		try {
			var resObj = new ObjectMapper().readValue(response, ReCaptchaResponse.class);
			return resObj.getScore();
		} 
		catch(Exception e) {
			System.err.println("Noooo! ".concat(e.getMessage()));
			return 0;
		}
	}
}
