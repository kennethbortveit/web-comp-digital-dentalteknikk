package no.bortveits.ddt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import no.bortveits.ddt.client.EmailClient;
import no.bortveits.ddt.model.ContactForm;
import no.bortveits.ddt.model.orm.ContactRequest;
import no.bortveits.ddt.repository.ContactRequestRepository;

@Service
public class ContactServiceImpl implements ContactService {
    private final ContactRequestRepository contactRequestRepository;
    private final EmailClient emailClient;

    public ContactServiceImpl(
        @Autowired ContactRequestRepository contactRequestRepository,
        @Autowired EmailClient emailClient
    ) {
        this.contactRequestRepository = contactRequestRepository;
        this.emailClient = emailClient;
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
                m.setInquiryOrder(it.isInquiry_order());
                m.setInquiryPrice(it.isInquiry_price());
                m.setInquiryOther(it.isInquiry_other());
                m.setReplyTypeEmail(it.isReply_type_email());
                m.setReplyTypePhone(it.isReply_type_phone());
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
        e.setInquiry_order(form.isInquiryOrder());
        e.setInquiry_price(form.isInquiryPrice());
        e.setInquiry_other(form.isInquiryOther());
        e.setReply_type_email(form.isReplyTypeEmail());
        e.setReply_type_phone(form.isReplyTypePhone());
        Long id = this.contactRequestRepository.save(e).getId();
        this.emailClient.sendEmail(
            "webmail@digitaldentalteknikk.no", 
            "Kontaktskjema", 
            this.createMessage(e)
            );
        return id;
    }

    private String createMessage(ContactRequest request) {
        final String yesText = "Ja";
        final String noText = "Nei";
        return """
        Det er kommet et kontaktskjema fra %s.

        Telefonnummer: %s
        Epost: %s

        Henvendelsen gjelder:
            Bestilling: %s
            Pristilbud: %s
            Annet: %s
        
        Melding: %s

        Personen ønsker å bli kontaktet på:
            Telefon: %s
            Epost: %s
        
        Denne meldingngen er automatisk generert.
        """.formatted(
            request.getName(), 
            request.getPhone(), 
            request.getEmail(),
            request.isInquiry_order() ? yesText : noText,
            request.isInquiry_price() ? yesText : noText,
            request.isInquiry_other() ? yesText : noText,
            request.getMessage(),
            request.isReply_type_phone() ? yesText : noText,
            request.isReply_type_email() ? yesText : noText
            );
    }

    @Override
    public void deleteContactRequest(long id) {
        this.contactRequestRepository.deleteById(id);
    }
}