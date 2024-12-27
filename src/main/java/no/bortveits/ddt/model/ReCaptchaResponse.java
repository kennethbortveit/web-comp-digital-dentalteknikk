package no.bortveits.ddt.model;

import java.time.LocalDateTime;

public class ReCaptchaResponse {
    private boolean success;
    private double score;
    private String action;
    private LocalDateTime challenge_ts;
    private String hostname;
}
