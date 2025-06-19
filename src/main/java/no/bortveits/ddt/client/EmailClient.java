package no.bortveits.ddt.client;

public interface EmailClient {
    public void sendEmail(String recipient, String subject, String message);
}
