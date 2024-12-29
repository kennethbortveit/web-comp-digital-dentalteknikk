package no.bortveits.ddt.model.orm;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "contact_request")
public class ContactRequest {
    @Id
    private Long id;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    private String inquiry;
    private String name;
    public String getInquiry() {
        return inquiry;
    }
    public void setInquiry(String inquiry) {
        this.inquiry = inquiry;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public String getReply_type() {
        return reply_type;
    }
    public void setReply_type(String reply_type) {
        this.reply_type = reply_type;
    }
    private String phone;
    private String email;
    private String message;
    private String reply_type;
}
