package no.bortveits.ddt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import no.bortveits.ddt.model.ContactForm;
import no.bortveits.ddt.repository.ContactRequestRepository;

@Service
public class ContactServiceImpl implements ContactService {
    private final ContactRequestRepository contactRequestRepository;

    public ContactServiceImpl(
        @Autowired ContactRequestRepository contactRequestRepository
    ) {
        this.contactRequestRepository = contactRequestRepository;
    }

    @Override
    public ContactForm[] listContactRequests(int pageSize, int page, boolean skipRead) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'listContactRequests'");
    }
}
