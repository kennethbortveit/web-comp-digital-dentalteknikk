package no.bortveits.ddt.client;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class EmailClientImpl implements EmailClient {

    private final JavaMailSender emailSender;

    public EmailClientImpl(
        JavaMailSender emailSender
    ) {
        this.emailSender = emailSender;
    }

    @Override
    public void sendEmail(String recipient, String subject, String message) {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setFrom("webmail@digitaldentalteknikk.no");
        mail.setTo(recipient);
        mail.setSubject(subject);
        mail.setText(message);
        this.emailSender.send(mail);
    }

}