import DDComponent from "../DDComponent.mjs";

export default class Contact extends DDComponent {
    constructor() {
        super()
    }
	
	static styles = `
		form {
			display: grid;
			gap: var(--spacing-small);
			grid-template-columns: 1fr 1fr;
			grid-template-areas:
				'inquiry-label inquiry-input'
				'name-label name-input'
				'phone-label phone-input'
				'email-label email-input'
				'reply-type-label reply-type-input'
				'message-label message-input'
				'. captcha-input'
				'. send-button';
		}
		.inquiry-label {
			grid-area: inquiry-label;
		}
		.inquiry-input {
			grid-area: inquiry-input;
		}
		.name-label {
			grid-area: name-label;
		}
		.name-input {
			grid-area: name-input;
		}
		.phone-label {
			grid-area: phone-label;
		}
		.phone-input {
			grid-area: phone-input;
		}
		.captcha-input {
			grid-area: captcha-input;
		}
		.contact-send-button {
			grid-area: send-button;
		}
		.email-label {
			grid-area: email-label;
		}
		.email-input {
			grid-area: email-input;
		}
		.reply-type-label {
			grid-area: reply-type-label;
		}
		.reply-type-input {
			grid-area: reply-type-input;
		}
		.message-label {
			grid-area: message-label;
		}
		.message-input {
			grid-area: message-input;
		}
	`

    connectedCallback() {
		this.applyStyles(Contact.styles)
        const form = this.#createForm()
        this.shadowRoot.appendChild(form)
    }

    #createForm() {
        const form = document.createElement('form')
		form.setAttribute('action', '/receive-contact-form')
		form.setAttribute('method', 'post')
		form.appendChild(this.#createInquiryLabel())
		form.appendChild(this.#createInquiryInput())
		form.appendChild(this.#createNameLabel())
		form.appendChild(this.#createNameInput())
		form.appendChild(this.#createPhoneLabel())
		form.appendChild(this.#createPhoneInput())
		form.appendChild(this.#createEmailLabel())
		form.appendChild(this.#createEmailInput())
		form.appendChild(this.#createReplyTypeLabel())
		form.appendChild(this.#createReplyTypeInput())
		form.appendChild(this.#createMessageLabel())
		form.appendChild(this.#createMessageInput())
		form.appendChild(this.#createCaptcha())
		form.appendChild(this.#createSendButton())
        return form
    }
	
	#createInquiryLabel() {
		const l = this.#createLabel('Henvendelsen gjelder:', 'inquiry-input')
		l.classList.add('inquiry-label')
		return l
	}
	#createInquiryInput() {
		const c = document.createElement('div')
		c.classList.add('inquiry-input')
		const i = this.#createTextInput('inquiry-input')
		c.appendChild(i)
		return c
	}	
	#createNameLabel() {
		const l = this.#createLabel('Navn:', 'name-input')
		l.classList.add('name-label')
		return l
	}
	#createNameInput() {
		const c = document.createElement('div')
		c.classList.add('name-input')
		const i = this.#createTextInput('name-input')
		c.appendChild(i)
		return c
	}
	#createPhoneLabel() {
		const l = this.#createLabel('Telefonnummer:', 'contact-phone')
		l.classList.add('phone-label')
		return l
	}
	#createPhoneInput() {
		const c = document.createElement('div')
		c.classList.add('phone-input')
		const i = this.#createTextInput('phone-input')
		c.appendChild(i)
		return c
	}
	#createEmailLabel() {
		const l = this.#createLabel('Epost:', 'email-input')
		l.classList.add('email-label')
		return l
	}
	#createEmailInput() {
		const c = document.createElement('div')
		c.classList.add('email-input')
		const i = this.#createTextInput('email-input')
		c.appendChild(i)
		return c
	}
	#createReplyTypeLabel() {
		const l = this.#createLabel('Jeg ønsker å kontaktes på:', 'reply-type-input')
		l.classList.add('reply-type-label')
		return l
	}
	#createReplyTypeInput() {
		const c = document.createElement('div')
		c.classList.add('reply-type-input')
		const i = this.#createTextInput('reply-type-input')
		c.appendChild(i)
		return c
	}
	#createMessageLabel() {
		const l = this.#createLabel('Melding', 'message-input')
		l.classList.add('message-label')
		return l
	}
	#createMessageInput() {
		const c = document.createElement('div')
		c.classList.add('message-input')
		const i = this.#createTextarea('message-input')
		c.appendChild(i)
		return c
	}	
	#createLabel(text, labelFor) {
		const l = document.createElement('label')
		l.setAttribute('for', labelFor)
		l.textContent = text
		return l
	}
	#createTextInput(id) {
		const i = document.createElement('input')
		i.setAttribute('type', 'text')
		i.setAttribute('id', id)
		i.setAttribute('name', id)
		return i
	}
	#createTextarea(id) {
		const t = document.createElement('textarea')
		t.setAttribute('id', id)
		t.setAttribute('name', id)
		return t
	}
	#createCaptcha() {
		const c = document.createElement('div')
		c.classList.add('captcha-input')
		const p = document.createElement('p')
		p.textContent = 'Captcha here'
		c.appendChild(p)
		return c
	}
	
    #createSendButton() {
        const button = document.createElement('button')
		button.classList.add('contact-send-button')
        button.setAttribute('type', 'submit')
        const buttonText = document.createTextNode('Send')
        button.appendChild(buttonText)
        return button
    }
}

DDComponent.define(Contact)