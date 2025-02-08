package no.bortveits.ddt.model.orm;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "contact_request")
public class ContactRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String phone;
    private String email;
    private String message;
    private String name;
	private boolean inquiry_order;
    private boolean inquiry_price;
	private boolean inquiry_other;
	private boolean reply_type_email;
	private boolean reply_type_phone;

	public boolean isInquiry_order() {
        return inquiry_order;
    }
    public void setInquiry_order(boolean inquiry_order) {
        this.inquiry_order = inquiry_order;
    }
    public boolean isInquiry_price() {
        return inquiry_price;
    }
    public void setInquiry_price(boolean inquiry_price) {
        this.inquiry_price = inquiry_price;
    }
    public boolean isInquiry_other() {
        return inquiry_other;
    }
    public void setInquiry_other(boolean inquiry_other) {
        this.inquiry_other = inquiry_other;
    }
    public boolean isReply_type_email() {
        return reply_type_email;
    }
    public void setReply_type_email(boolean reply_type_email) {
        this.reply_type_email = reply_type_email;
    }
    public boolean isReply_type_phone() {
        return reply_type_phone;
    }
    public void setReply_type_phone(boolean reply_type_phone) {
        this.reply_type_phone = reply_type_phone;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
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
}
