package no.bortveits.ddt.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;

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
	public ContactForm ReceiveContactForm(ContactForm contactForm) {
		if(validCaptcha(this.recaptchaVerificationUrl, contactForm.getRecaptcha(), this.recaptachaSecret)) {
			return contactForm;
		}
		var empty = new ContactForm();
		empty.setMessage("Invalid captcha.");
		return empty;
	}

	private boolean validCaptcha(final String uri, final String token, final String secret) {
		var obj = new ReCaptchaRequest();
		obj.setResponse(token);
		obj.setSecret(secret);
		var fullUri = uri
			.concat("?secret=").concat(secret)
			.concat("&response=").concat(token);
		var request = this.webClient
			.post()
			.uri(fullUri)
			.contentType(MediaType.APPLICATION_JSON)
			.retrieve()
			.bodyToMono(String.class)
			.block();
		return false;
	}
}
