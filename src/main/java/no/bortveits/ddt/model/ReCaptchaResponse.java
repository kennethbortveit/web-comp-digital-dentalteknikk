package no.bortveits.ddt.model;

import java.time.LocalDateTime;

public class ReCaptchaResponse {

    private boolean success;
    private double score;
    private String action;
    private LocalDateTime challenge_ts;
    private String hostname;

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
    public LocalDateTime getChallenge_ts() {
        return challenge_ts;
    }
    public void setChallenge_ts(LocalDateTime challenge_ts) {
        this.challenge_ts = challenge_ts;
    }
    public String getHostname() {
        return hostname;
    }
    public void setHostname(String hostname) {
        this.hostname = hostname;
    }
}
