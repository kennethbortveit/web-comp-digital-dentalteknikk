package no.bortveits.ddt.service;

import no.bortveits.ddt.model.ContactForm;

public interface ContactService {
    ContactForm[] listContactRequests(int pageSize, int page, boolean skipRead);
}