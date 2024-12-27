package no.bortveits.ddt.model;

public class ReCaptcha {
    private String secret;
    private String reponse;

    public String getSecret() {
        return secret;
    }
    public void setSecret(String v) {
        this.secret = v;
    }
    public String getResponse() {
        return this.reponse;
    }
    public void setResponse(String v) {
        this.reponse = v;
    }
}
