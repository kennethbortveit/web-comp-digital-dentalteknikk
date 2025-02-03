package no.bortveits.ddt.model;

public class ContactForm {
	private long id;
	private boolean inquiryOrder;
	private boolean inquiryPrice;
	private boolean inquiryOther;
	private String name;
	private String phone;
	private String email;
	private String message;
	private boolean replyTypeEmail;
	private boolean replyTypePhone;

	public boolean isInquiryOrder() {
		return inquiryOrder;
	}
	public void setInquiryOrder(boolean inquiryOrder) {
		this.inquiryOrder = inquiryOrder;
	}
	public boolean isInquiryPrice() {
		return inquiryPrice;
	}
	public void setInquiryPrice(boolean inquiryPrice) {
		this.inquiryPrice = inquiryPrice;
	}
	public boolean isInquiryOther() {
		return inquiryOther;
	}
	public void setInquiryOther(boolean inquiryOther) {
		this.inquiryOther = inquiryOther;
	}
	public boolean isReplyTypeEmail() {
		return replyTypeEmail;
	}
	public void setReplyTypeEmail(boolean replyTypeEmail) {
		this.replyTypeEmail = replyTypeEmail;
	}
	public boolean isReplyTypePhone() {
		return replyTypePhone;
	}
	public void setReplyTypePhone(boolean replyTypePhone) {
		this.replyTypePhone = replyTypePhone;
	}
	private String recaptcha;

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getRecaptcha() {
		return recaptcha;
	}
	public void setRecaptcha(String recaptcha) {
		this.recaptcha = recaptcha;
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