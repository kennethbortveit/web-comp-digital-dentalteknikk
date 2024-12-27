package no.bortveits.ddt.controller;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpRequest.BodyPublishers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import no.bortveits.ddt.model.ContactForm;
import no.bortveits.ddt.model.ReCaptcha;
import no.bortveits.ddt.model.ReCaptchaResponse;

@RestController
@RequestMapping("/api/contact")
public class ContactController {
	private final RestTemplate restTemplate;
	private final String recaptchaVerificationUrl;
	private final String recaptachaSecret;
	

	public ContactController(
		@Value("${google.recaptcha.url}") String recaptchaVerificationUrl,
		@Value("${google.recaptcha.secret}") String recaptchaSecret
	)
	{
		this.restTemplate = new RestTemplate();
		this.recaptchaVerificationUrl = recaptchaVerificationUrl;
		this.recaptachaSecret = recaptchaSecret;
	}

	@PostMapping("/receive-contact-form")
	public ContactForm ReceiveContactForm(ContactForm contactForm) {
		if(validCaptcha(this.recaptchaVerificationUrl, this.recaptachaSecret)) {
			return contactForm;
		}
		var empty = new ContactForm();
		empty.setMessage("Invalid captcha.");
		return empty;
	}

	private boolean validCaptcha(String token, String secret) {
		var obj = new ReCaptcha();
		obj.setResponse(token);
		obj.setSecret(secret);
		var res = this.restTemplate.postForObject(
			this.recaptchaVerificationUrl, obj, ReCaptchaResponse.class);
		return false;
	}
}
