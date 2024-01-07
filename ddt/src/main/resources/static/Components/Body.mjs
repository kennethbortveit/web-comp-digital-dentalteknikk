import DDComponent from "./DDComponent.mjs";
import Section from './Sections/Section.mjs'
import About from './Sections/About.mjs'
import Products from './Sections/Products.mjs'
import DigitalProduction from "./Sections/DigitalProduction.mjs";
import Contact from "./Sections/Contact.mjs";
import SelfProducedImplant from "./Sections/SelfProducedImplant.mjs";

export default class Body extends DDComponent {
    constructor() {
        super()
    }

    connectedCallback() {
        const container = this.#createContainer()
        container.appendChild(
            this.#createAbout()
        )
        container.appendChild(
            this.#createProducts()
        )
        container.appendChild(
			this.#createSelfProducedImplant()
		)
        container.appendChild(
            this.#createDigitalProduction()
        )
        container.appendChild(
            this.#createContact()
        )
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