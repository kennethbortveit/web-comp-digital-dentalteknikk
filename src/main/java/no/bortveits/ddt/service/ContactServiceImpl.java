package no.bortveits.ddt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import no.bortveits.ddt.model.ContactForm;
import no.bortveits.ddt.model.orm.ContactRequest;
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
        var res = contactRequestRepository
            .findAll()
            .stream()
            .map(it -> {
                var m = new ContactForm();
                m.setId(it.getId());
                m.setName(it.getName());
                m.setEmail(it.getEmail());
                m.setMessage(it.getMessage());
                m.setPhone(it.getPhone());
                return m;
            })
            .toArray(ContactForm[]::new);
        return res;
    }

    @Override
    public Long saveContactForm(ContactForm form) {
        var e = new ContactRequest();
        e.setEmail(form.getEmail());
        e.setMessage(form.getMessage());
        e.setName(form.getName());
        e.setPhone(form.getPhone());
        return this.contactRequestRepository.save(e).getId();
    }

    @Override
    public void deleteContactRequest(long id) {
        this.contactRequestRepository.deleteById(id);
    }
}