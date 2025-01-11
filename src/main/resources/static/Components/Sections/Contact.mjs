import DDComponent from "../DDComponent.mjs";
import Button from '../Button.mjs'

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
				'. send-button';
		}
		.contact-label {
			display: flex;
			justify-content: flex-end;
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
		.ddt-text-input {
			height: var(--spacing-medium);
			border-radius: 4px;
			width: var(--spacing-xxlarge);
		}
		.ddt-textarea {
			width: var(--spacing-xxlarge);
			height: var(--spacing-large);
			border-radius: 4px;
		}
	`

    connectedCallback() {
		this.applyStyles(Contact.styles)
        const form = this.#createForm()
        this.shadowRoot.appendChild(form)
		
    }

    #createForm() {
        const form = document.createElement('form')
		form.setAttribute('action', '/api/contact/receive-contact-form')
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
		form.appendChild(this.#createSendButton())
        return form
    }
	
	#createInquiryLabel() {
		const l = this.#createLabel('Henvendelsen gjelder:', 'inquiry-input')
		l.classList.add('inquiry-label')
		l.classList.add('contact-label')
		return l
	}
	#createInquiryInput() {
		const c = document.createElement('div')
		c.classList.add('inquiry-input')
		const orderContainer = document.createElement('div')
		const order = this.#createCheckInput('contact-inquiry-order')
		const orderLabel = this.#createLabel('Bestilling', 'contact-inquiry-order')
		orderContainer.appendChild(order)
		orderContainer.appendChild(orderLabel)
		const priceContainer = document.createElement('div')
		const price = this.#createCheckInput('contact-inquiry-price')
		const priceLabel = this.#createLabel('Pristilbud', 'contact-inquiry-price')
		priceContainer.appendChild(price)
		priceContainer.appendChild(priceLabel)
		const otherContainer = document.createElement('div')
		const other = this.#createCheckInput('contact-inquiry-other')
		const otherLabel = this.#createLabel('Annet', 'contact-inquiry-other')	
		otherContainer.appendChild(other)
		otherContainer.appendChild(otherLabel)
		c.appendChild(orderContainer)
		c.appendChild(priceContainer)
		c.appendChild(otherContainer)
		return c
	}	
	#createNameLabel() {
		const l = this.#createLabel('Navn:', 'name-input')
		l.classList.add('name-label')
		l.classList.add('contact-label')
		return l
	}
	#createNameInput() {
		const c = document.createElement('div')
		c.classList.add('name-input')
		const i = this.#createTextInput('name-input', 'name')
		c.appendChild(i)
		return c
	}
	#createPhoneLabel() {
		const l = this.#createLabel('Telefonnummer:', 'contact-phone')
		l.classList.add('phone-label')
		l.classList.add('contact-label')
		return l
	}
	#createPhoneInput() {
		const c = document.createElement('div')
		c.classList.add('phone-input')
		const i = this.#createTextInput('phone-input', 'phone')
		c.appendChild(i)
		return c
	}
	#createEmailLabel() {
		const l = this.#createLabel('Epost:', 'email-input')
		l.classList.add('email-label')
		l.classList.add('contact-label')
		return l
	}
	#createEmailInput() {
		const c = document.createElement('div')
		c.classList.add('email-input')
		const i = this.#createTextInput('email-input', 'email')
		c.appendChild(i)
		return c
	}
	#createReplyTypeLabel() {
		const l = this.#createLabel('Jeg ønsker å kontaktes på:', 'reply-type-input')
		l.classList.add('reply-type-label')
		l.classList.add('contact-label')
		return l
	}
	#createReplyTypeInput() {
		const c = document.createElement('div')
		c.classList.add('reply-type-input')
		const i = this.#createTextInput('reply-type-input', 'replyType')
		c.appendChild(i)
		return c
	}
	#createMessageLabel() {
		const l = this.#createLabel('Melding', 'message-input')
		l.classList.add('message-label')
		l.classList.add('contact-label')
		return l
	}
	#createMessageInput() {
		const c = document.createElement('div')
		c.classList.add('message-input')
		const i = this.#createTextarea('message-input', 'message')
		c.appendChild(i)
		return c
	}	
	#createLabel(text, labelFor) {
		const l = document.createElement('label')
		l.setAttribute('for', labelFor)
		l.textContent = text
		return l
	}
	#createTextInput(id, name) {
		const i = document.createElement('input')
		i.classList.add('ddt-text-input')
		i.setAttribute('type', 'text')
		i.setAttribute('id', id)
		i.setAttribute('name', name)
		return i
	}
	#createTextarea(id, name) {
		const t = document.createElement('textarea')
		t.classList.add('ddt-textarea')
		t.setAttribute('id', id)
		t.setAttribute('name', name)
		return t
	}
	#createCheckInput(id) {
		const i = document.createElement('input')
		i.setAttribute('type', 'checkbox')
		i.setAttribute('id', id)
		return i
	}
    #createSendButton() {
        const button = new Button()
		button.classList.add('contact-send-button')
        button.innerText = 'Send'
		button.onclick = e => {
			e.preventDefault()
			grecaptcha.ready(() => {
				grecaptcha
					.execute('6Ldw7KIqAAAAAI3QPgpkMS0xP95dO5Vg-bTMqbDW', {action: 'submit'})
					.then(token => {
						const form = this.shadowRoot.querySelector('form')
						const i = document.createElement('input')
						i.setAttribute('value', token)
						i.setAttribute('type', 'hidden')
						i.setAttribute('name', 'recaptcha')
						form.appendChild(i)
						form.submit()
					})
			})
		}
        return button
    }
}

DDComponent.define(Contact)