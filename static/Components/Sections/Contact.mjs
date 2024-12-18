import DDComponent from "../DDComponent.mjs";

export default class Contact extends DDComponent {
    constructor() {
        super()
    }

    connectedCallback() {
        const form = this.#createForm()
        this.shadowRoot.appendChild(form)
    }

    #createForm() {
        const form = document.createElement('form')
        const inputs = [
            this.#createTheNoticeConcerns.bind(this),
            this.#createName.bind(this),
            this.#createPhonenumber.bind(this),
            this.#createEmail.bind(this),
            this.#createResponseDetails.bind(this),
            this.#createMessage.bind(this),
            this.#createSendButton.bind(this)
        ]
        inputs.forEach(function(i) {
            form.appendChild(i())
        })
        return form
    }

    #createTheNoticeConcerns() {
        const fieldset = document.createElement('fieldset')
        const label = document.createElement('label')
        const labelText = document.createTextNode('Henvendelsen gjelder:') 
        label.appendChild(labelText)
        fieldset.appendChild(label)
        const orderCheck = this.#createOrderCheck()
        fieldset.appendChild(orderCheck)
        const offerCheck = this.#createOfferCheck()
        fieldset.appendChild(offerCheck)
        const otherCheck = this.#createOtherCheck()
        fieldset.appendChild(otherCheck)
        return fieldset
    }

    #createOrderCheck() {
        const container = document.createElement('div')
        const orderCheck = document.createElement('input')
        orderCheck.setAttribute('title', 'notice-order')
        orderCheck.setAttribute('type', 'checkbox')
        container.appendChild(orderCheck)
        const orderLabel = document.createElement('label')
        orderLabel.setAttribute('for', 'notice-order')
        const orderLabelText = document.createTextNode('Bestilling')
        orderLabel.appendChild(orderLabelText)
        container.appendChild(orderLabel)
        return container
    }

    #createOfferCheck() {
        const container = document.createElement('div')
        const orderCheck = document.createElement('input')
        orderCheck.setAttribute('type', 'checkbox')
        orderCheck.setAttribute('title', 'notice-order')
        container.appendChild(orderCheck)
        const orderCheckLabel = document.createElement('label')
        orderCheckLabel.setAttribute('for', 'notice-order')
        const orderCheckText = document.createTextNode('Pristilbud')
        orderCheckLabel.appendChild(orderCheckText)
        container.appendChild(orderCheckLabel)
        return container
    }

    #createOtherCheck() {
        const container = document.createElement('div')
        const otherCheck = document.createElement('input')
        otherCheck.setAttribute('type', 'checkbox')
        otherCheck.setAttribute('title', 'notice-order')
        container.appendChild(otherCheck)
        const otherCheckLabel = document.createElement('label')
        otherCheckLabel.setAttribute('for', 'notice-order')
        const otherCheckText = document.createTextNode('Annet')
        otherCheckLabel.appendChild(otherCheckText)
        container.appendChild(otherCheckLabel)
        return container
    }

    #createName() {
        const fieldset = document.createElement('fieldset')
        const label = document.createElement('label')
        label.setAttribute('for', 'contact-name') 
        const text = document.createTextNode('Navn:')
        label.appendChild(text)
        fieldset.appendChild(label)
        const input = document.createElement('input')
        input.setAttribute('title', 'contact-name')
        input.setAttribute('type', 'text')
        fieldset.appendChild(input)
        return fieldset
    }

    #createPhonenumber() {
        const fieldset = document.createElement('fieldset')
        const label = document.createElement('label')
        label.setAttribute('for', 'contact-phonenumber')
        const text = document.createTextNode('Telefonnummer:')
        label.appendChild(text)
        fieldset.appendChild(label)
        const input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.setAttribute('title', 'contact-phonenumber')
        fieldset.appendChild(input)
        return fieldset
    }

    #createEmail() {
        const fieldset = document.createElement('fieldset')
        const label = document.createElement('label')
        label.setAttribute('for', 'contact-email')
        const text = document.createTextNode('E-post:')
        label.appendChild(text)
        fieldset.appendChild(label)
        const input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.setAttribute('title', 'contact-email')
        fieldset.appendChild(input)
        return fieldset
    }

    #createResponseDetails() {
        const fieldset = document.createElement('fieldset')

        const label = document.createElement('label')
        const text = document.createTextNode('Jeg ønsker å kontaktes på:')
        label.appendChild(text)
        fieldset.appendChild(label)

        const phoneCheck = document.createElement('input')
        phoneCheck.setAttribute('type', 'checkbox')
        phoneCheck.setAttribute('title', 'response-details-phone-check')
        fieldset.appendChild(phoneCheck)
        const phoneCheckLabel = document.createElement('label')
        phoneCheckLabel.setAttribute('for', 'response-details-phone-check')
        const phoneCheckLabelText = document.createTextNode('Telefon')
        phoneCheckLabel.appendChild(phoneCheckLabelText)
        fieldset.appendChild(phoneCheckLabel)

        const emailCheck = document.createElement('input')
        emailCheck.setAttribute('type', 'checkbox')
        emailCheck.setAttribute('title', 'contact-details-email-check')
        fieldset.appendChild(emailCheck)
        const emailCheckLabel = document.createElement('label')
        emailCheckLabel.setAttribute('for', 'contact-details-email-check')
        const emailCheckLabelText = document.createTextNode('E-post:')
        emailCheckLabel.appendChild(emailCheckLabelText)
        fieldset.appendChild(emailCheckLabel)

        return fieldset
    }

    #createMessage() {
        const fieldset = document.createElement('fieldset')
        const label = document.createElement('label')
        label.setAttribute('for', 'contact-message')
        const labelText = document.createTextNode('Melding:')
        label.appendChild(labelText)
        fieldset.appendChild(label)
        const textfield = document.createElement('textarea')
        textfield.setAttribute('title', 'contact-message')
        fieldset.appendChild(textfield)
        return fieldset
    }

    #createSendButton() {
        const button = document.createElement('button')
        button.setAttribute('type', 'submit')
        const buttonText = document.createTextNode('Send')
        button.appendChild(buttonText)
        return button
    }
}

DDComponent.define(Contact)