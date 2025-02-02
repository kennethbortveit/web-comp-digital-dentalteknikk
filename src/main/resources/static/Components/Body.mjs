import DDComponent from "./DDComponent.mjs";
import Section from './Sections/Section.mjs'
import About from './Sections/About.mjs'
import Products from './Sections/Products.mjs'
import DigitalProduction from "./Sections/DigitalProduction.mjs";
import Contact from "./Sections/Contact.mjs";
import SelfProducedImplant from "./Sections/SelfProducedImplant.mjs";

export default class Body extends DDComponent {
    #sections

    constructor() {
        super()
        this.#sections = [
            this.#createAbout(),
            this.#createProducts(),
            this.#createSelfProducedImplant(),
            this.#createDigitalProduction(),
            this.#createContact()
        ]
    }


    get menuItems() { return this.#sections }

    connectedCallback() {
        const container = this.#createContainer()
        this.#sections.forEach(s => container.appendChild(s))
        this.shadowRoot.appendChild(container)
    }

    #createContainer() {
        const container = document.createElement('div')
        return container
    }

    #createAbout() {
        const section = this.#createSection('Om oss')
        const about = document.createElement(
            DDComponent.getComponentName(About)
        )
        about.setAttribute('slot', 'content')
        section.appendChild(about)
        return section
    }

    #createProducts() {
        const section = this.#createSection('Produkter')
        const products = document.createElement(
            DDComponent.getComponentName(Products)
        )
        products.setAttribute('background-color', 'var(--black)')
        products.setAttribute('slot', 'content')
        section.appendChild(products)
        return section
    }

    #createDigitalProduction() {
        const section = this.#createSection('Digital produksjon')
        const digitalProduction = document.createElement(
            DDComponent.getComponentName(DigitalProduction)
        )
        digitalProduction.setAttribute('slot', 'content')
        section.appendChild(digitalProduction)
        return section
    }

    #createContact() {
        const section = this.#createSection('Kontakt')
        const contact = document.createElement(
            DDComponent.getComponentName(Contact)
        )
        contact.setAttribute('slot', 'content')
        section.appendChild(contact)
        return section
    }
    
    #createSelfProducedImplant() {
		const section = this.#createSection('Egenproduksjon implantater')
		const selfProducesImplant = DDComponent.createElement(SelfProducedImplant)
		selfProducesImplant.setAttribute('slot', 'content')
        selfProducesImplant.setAttribute('background-color', 'var(--blue)')
		section.appendChild(selfProducesImplant)
		return section
	}

    #createSection(name) {
        const section = document.createElement(
            DDComponent.getComponentName(Section)
        )
        section.setAttribute('name', name)
        return section
    }
}

DDComponent.define(Body)