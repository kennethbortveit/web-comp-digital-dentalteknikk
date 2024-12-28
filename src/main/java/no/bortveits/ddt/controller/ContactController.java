package no.bortveits.ddt.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import com.fasterxml.jackson.databind.ObjectMapper;

import no.bortveits.ddt.model.ContactForm;
import no.bortveits.ddt.model.ContactFormResponse;
import no.bortveits.ddt.model.ReCaptchaRequest;
import no.bortveits.ddt.model.ReCaptchaResponse;

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
	public ContactFormResponse ReceiveContactForm(ContactForm contactForm) {
		var captchaRes = validateCaptcha(
			this.recaptchaVerificationUrl, 
			contactForm.getRecaptcha(), 
			this.recaptachaSecret);
		var res = new ContactFormResponse();
		res.setScore(captchaRes.getScore());
		if(captchaRes.isSuccess()) {
			res.setMessage("It was a success.");
		} else {
			var msg = String.format(
				"A failure with these error messages: %s.", 
				String.join(",", captchaRes.getErrorCodes())
			);
			res.setMessage(msg);
		}
		return res;
		
	}

	private ReCaptchaResponse validateCaptcha(final String uri, final String token, final String secret) {
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
			return resObj;
		} 
		catch(Exception e) {
			System.err.println("Noooo! ".concat(e.getMessage()));
			var resObj = new ReCaptchaResponse();
			resObj.setScore(-1);
			return resObj;
		}
	}
}
