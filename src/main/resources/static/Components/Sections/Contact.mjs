import DDComponent from "../DDComponent.mjs";
import Button from '../Button.mjs'
import PendingOperation from "../PendingOperation/PendingOperation.mjs";

export default class Contact extends DDComponent {
    constructor() {
        super()
    }
	
	static styles = `
		:host {
			margin: var(--spacing-medium);
		}
		@media (width <= 1200px) {
			form {
				display: flex;
				flex-direction: column;
			}
			form > *:nth-child(2n) {
				margin-bottom: var(--spacing-medium);
			}
			.inquiry-input {
				display: flex;
				gap: var(--spacing-medium);
			}
			.reply-type-input {
				display: flex;
				gap: var(--spacing-medium);
			}
			.ddt-text-input {
				height: var(--spacing-large);
				font-size: 36px;
				width: 512px;
				border: 2px solid var(--black);
			}
			.ddt-textarea {
				width: 512px;
				height: var(--spacing-xlarge);
				border: 2px solid var(--black);
				font-size: 36px;
				resize: none;
			}
			form input[type="checkbox"] {
				height: var(--spacing-large);
				width: var(--spacing-large);
				border: 2px solid var(--black);
			}
			.check-container {
				display: flex;
				justify-content: flex-start;
				align-items: center;
			}
		}
		@media (width > 1200px) {
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
				align-items: center;
			}
			.inquiry-label {
				grid-area: inquiry-label;
				align-items: center;
			}
			.inquiry-input {
				grid-area: inquiry-input;
				display: flex;
				gap: var(--spacing-xsmall);
			}
			.name-label {
				grid-area: name-label;
				align-items: center;
			}
			.name-input {
				grid-area: name-input;
			}
			.phone-label {
				grid-area: phone-label;
				align-items: center;
			}
			.phone-input {
				grid-area: phone-input;
			}
			.contact-send-button {
				grid-area: send-button;
			}
			.email-label {
				grid-area: email-label;
				align-items: center;
			}
			.email-input {
				grid-area: email-input;
			}
			.reply-type-label {
				grid-area: reply-type-label;
				align-items: center;
			}
			.reply-type-input {
				grid-area: reply-type-input;
				display: flex;
				gap: var(--spacing-xsmall);
			}
			.message-label {
				grid-area: message-label;
				align-items: center;
			}
			.message-input {
				grid-area: message-input;
			}
			.ddt-text-input {
				height: var(--spacing-medium);
				width: var(--spacing-xxlarge);
			}
			.ddt-textarea {
				width: var(--spacing-xxlarge);
				height: var(--spacing-large);
				resize: none;
			}
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
	#createCheckContainer() {
		const c = document.createElement('div')
		c.classList.add('check-container')
		return c
	}
	#createInquiryInput() {
		const c = document.createElement('div')
		c.classList.add('inquiry-input')
		const orderContainer = this.#createCheckContainer()
		const order = this.#createCheckInput('contact-inquiry-order', 'inquiryOrder')
		const orderLabel = this.#createLabel('Bestilling', 'contact-inquiry-order')
		orderContainer.appendChild(order)
		orderContainer.appendChild(orderLabel)
		const priceContainer = this.#createCheckContainer()
		const price = this.#createCheckInput('contact-inquiry-price', 'inquiryPrice')
		const priceLabel = this.#createLabel('Pristilbud', 'contact-inquiry-price')
		priceContainer.appendChild(price)
		priceContainer.appendChild(priceLabel)
		const otherContainer = this.#createCheckContainer()
		const other = this.#createCheckInput('contact-inquiry-other', 'inquiryOther')
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
		const emailContainer = this.#createCheckContainer()
		const email = this.#createCheckInput('contact-reply-type-email', 'replyTypeEmail')
		const emailLabel = this.#createLabel('Epost', 'contact-reply-type-email')
		emailContainer.appendChild(email)
		emailContainer.appendChild(emailLabel)
		const phoneContainer = this.#createCheckContainer()
		const phone = this.#createCheckInput('contact-reply-type-phone', 'replyTypePhone')
		const phoneLabel = this.#createLabel('Telefon', 'contact-reply-type-phone')
		phoneContainer.appendChild(phone)
		phoneContainer.appendChild(phoneLabel)
		c.appendChild(emailContainer)
		c.appendChild(phoneContainer)
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
	#createCheckInput(id, name) {
		const i = document.createElement('input')
		i.setAttribute('type', 'checkbox')
		i.setAttribute('id', id)
		i.setAttribute('name', name)
		return i
	}
    #createSendButton() {
        const button = new Button()
		button.setAttribute('type', 'button')
		button.classList.add('contact-send-button')
		const txtSpan = document.createElement('span')
		txtSpan.setAttribute('slot', 'text')
		txtSpan.innerText = 'Send'
		button.appendChild(txtSpan)
		button.onclick = e => {
			this.dispatchEvent(new CustomEvent(
				PendingOperation.ENABLE_REQUESTED_EVENT_ID,
				{
					bubbles: true,
					composed: true
				}
			))
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