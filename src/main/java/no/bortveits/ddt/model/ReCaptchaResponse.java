package no.bortveits.ddt.model;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonSetter;

public class ReCaptchaResponse {

    private boolean success;
    private double score;
    private String action;
    private String challenge_ts;
    private String hostname;
    private String[] errorCodes;

    public ReCaptchaResponse() {
        this.errorCodes = new String[0];
    }

    @JsonGetter("error-codes")
    public String[] getErrorCodes() {
        return errorCodes;
    }
    @JsonSetter("error-codes")
    public void setErrorCodes(String[] errorCodes) {
        this.errorCodes = errorCodes;
    }
    public boolean isSuccess() {
        return success;
    }
    public void setSuccess(boolean success) {
        this.success = success;
    }
    public double getScore() {
        return score;
    }
    public void setScore(double score) {
        this.score = score;
    }
    public String getAction() {
        return action;
    }
    public void setAction(String action) {
        this.action = action;
    }
    public String getChallenge_ts() {
        return challenge_ts;
    }
    public void setChallenge_ts(String challenge_ts) {
        this.challenge_ts = challenge_ts;
    }
    public String getHostname() {
        return hostname;
    }
    public void setHostname(String hostname) {
        this.hostname = hostname;
    }
}
