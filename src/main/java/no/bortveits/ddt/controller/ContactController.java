package no.bortveits.ddt.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import no.bortveits.ddt.model.ContactForm;

@RestController
@RequestMapping("/api/contact")
public class ContactController {
	@PostMapping("/receive-contact-form")
	public ContactForm ReceiveContactForm(ContactForm contactForm) {
		return contactForm;
	}
}
