package no.bortveits.ddt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import com.fasterxml.jackson.databind.ObjectMapper;

import no.bortveits.ddt.model.ContactForm;
import no.bortveits.ddt.model.ReCaptchaRequest;
import no.bortveits.ddt.model.ReCaptchaResponse;
import no.bortveits.ddt.service.ContactService;

@RestController
@RequestMapping("/api/contact")
public class ContactController {
	private final WebClient webClient;
	private final String recaptchaVerificationUrl;
	private final String recaptachaSecret;
	private final ContactService contactService;

	public ContactController(
		@Value("${google.recaptcha.url}") String recaptchaVerificationUrl,
		@Value("${google.recaptcha.secret}") String recaptchaSecret,
		@Autowired ContactService contactService
	) {
		this.recaptchaVerificationUrl = recaptchaVerificationUrl;
		this.recaptachaSecret = recaptchaSecret;
		this.webClient = WebClient.create();
		this.contactService = contactService;
	}

	@GetMapping("/list")
	public ContactForm[] listLatest() {
		return this.contactService
			.listContactRequests(10, 0, false);
	}

	@PostMapping("/receive-contact-form")
	public Long ReceiveContactForm(ContactForm contactForm) {
		var captchaRes = validateCaptcha(
			this.recaptchaVerificationUrl, 
			contactForm.getRecaptcha(), 
			this.recaptachaSecret);
		if(captchaRes.getScore() > 0.5) {
			return this.contactService.saveContactForm(contactForm);
		}
		return -1L;
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
