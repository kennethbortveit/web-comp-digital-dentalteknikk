import DDComponent from "./DDComponent.mjs";
import Map from "./Map.mjs";

export default class Footer extends DDComponent {
    static styles = `
        :host {
            display: flex;
            justify-content: center;
        }
        .footer-container {
            width: 100%;
            display: flex;
            gap: var(--spacing-medium);
            padding: var(--spacing-medium);
            max-width: var(--inner-max-width);
        }

        @media (width < 1200px) {
            .footer-container {
                flex-direction: column;
            }
        }
        @media (1200px <= width) {
            .footer-container {
                flex-direction: row;
            }
        }
        .footer-info {
            flex-basis: 0;
            flex-grow: 1;
        }
        .footer-map {
            flex-basis: 0;
            flex-grow: 1;
        }
        .footer-info-header {
            font-size: var(--font-size-footer-title);
            color: var(--white);
            text-transform: uppercase;
            font-weight: normal;
            text-align: left;
        }
        .footer-info-label-cell {
            color: var(--grey);
        }
        .footer-info-value-cell {
            color: var(--white);
            padding-left: var(--footer-custom-spacing);
        }
        .footer-info-value-cell-facebook > img {
            width: 40px;
        }   
        tr.footer-info-block-space > th, tr.footer-info-block-space > td {
            padding-bottom: var(--spacing-medium);
        }
    `
    constructor() {
        super()
    }

    connectedCallback() {
        const container = this.#createContainer()
        this.shadowRoot.appendChild(container)
    }

    #createContainer() {
        this.applyStyles(Footer.styles)
        const container = document.createElement('div')
        container.setAttribute('class', 'footer-container')
        const info = this.#createInfo()
        const map = this.#createMap()
        container.appendChild(info)
        container.appendChild(map)
        return container
    }

    #createFacebookLink() {
        const link = document.createElement('a')
        link.classList.add('footer-info-value-cell-facebook')
        link.setAttribute('href', 'https://www.facebook.com/DrobakDentalteknikk/')
        link.setAttribute('target', '_blank')
        const image = document.createElement('img')
        image.src = './Images/footer/Facebook_logo_2.svg'
        image.alt = 'Facebook logo'
        link.appendChild(image)
        return link
    }

    #createMap() {
		const container = document.createElement('div')
		container.setAttribute('class', 'footer-map')
        const map = DDComponent.createElement(Map)
        container.appendChild(map)
        return container
    }
    
    #createInfo() {
		const container = document.createElement('div')
		container.setAttribute('class', 'footer-info')
        const table = document.createElement('table')

        const tr0 = document.createElement('tr')
        tr0.classList.add('footer-info-block-space')
        const headerCell = document.createElement('th')
        headerCell.setAttribute('colspan', '2')
        headerCell.classList.add('footer-info-header')
        headerCell.textContent = 'Digital Dentalteknikk AS'
        tr0.appendChild(headerCell)
        table.appendChild(tr0)

        const tr1 = document.createElement('tr')
        const contactPersonLabelCell = document.createElement('td')
        contactPersonLabelCell.classList.add('footer-info-label-cell')
        contactPersonLabelCell.textContent = 'Kontaktperson:'
        tr1.appendChild(contactPersonLabelCell)
        const contactPersonValueCell = document.createElement('td')
        contactPersonValueCell.classList.add('footer-info-value-cell')
        contactPersonValueCell.textContent = 'Morten Iversen'
        tr1.appendChild(contactPersonValueCell)
        table.appendChild(tr1)

        const tr2 = document.createElement('tr')
        const phoneLabelCell = document.createElement('td')
        phoneLabelCell.classList.add('footer-info-label-cell')
        phoneLabelCell.textContent = 'Telefon:'
        tr2.appendChild(phoneLabelCell)
        const phoneValueCell = document.createElement('td')
        phoneValueCell.classList.add('footer-info-value-cell')
        phoneValueCell.textContent = '22 42 12 39 / 90 79 17 24'
        tr2.appendChild(phoneValueCell)
        table.appendChild(tr2)

        const tr3 = document.createElement('tr')
        tr3.classList.add('footer-info-block-space')
        const emailLabelCell = document.createElement('td')
        emailLabelCell.classList.add('footer-info-label-cell')
        emailLabelCell.textContent = 'E-post:'
        tr3.appendChild(emailLabelCell)
        const emailValueCell = document.createElement('td')
        emailValueCell.classList.add('footer-info-value-cell')
        emailValueCell.textContent = 'ddtpost@online.no'
        tr3.appendChild(emailValueCell)
        table.appendChild(tr3)

        const tr4 = document.createElement('tr')
        const addressLabelCell = document.createElement('td')
        addressLabelCell.classList.add('footer-info-label-cell')
        addressLabelCell.textContent = 'Postadresse:'
        tr4.appendChild(addressLabelCell)
        const addressValueCell = document.createElement('td')
        addressValueCell.classList.add('footer-info-value-cell')
        addressValueCell.textContent = 'Postboks 1614 Vika, 0119 Oslo'
        tr4.appendChild(addressValueCell)
        table.appendChild(tr4)

        const tr5 = document.createElement('tr')
        const visitAddressLabelCell = document.createElement('td')
        visitAddressLabelCell.classList.add('footer-info-label-cell')
        visitAddressLabelCell.textContent = 'Besøksadresse:'
        tr5.appendChild(visitAddressLabelCell)
        const visitAddressValueCell = document.createElement('td')
        visitAddressValueCell.classList.add('footer-info-value-cell')
        visitAddressValueCell.textContent = 'Øvre Vollgate 6, 0158 Oslo'
        tr5.appendChild(visitAddressValueCell)
        table.appendChild(tr5)

        const tr6 = document.createElement('tr')
        tr6.classList.add('footer-info-block-space')
        const orgNumberLabelCell = document.createElement('td')
        orgNumberLabelCell.classList.add('footer-info-label-cell')
        orgNumberLabelCell.textContent = 'Org.nr.:'
        tr6.appendChild(orgNumberLabelCell)
        const orgNumberValueCell = document.createElement('td')
        orgNumberValueCell.classList.add('footer-info-value-cell')
        orgNumberValueCell.textContent = '997 034 406'
        tr6.appendChild(orgNumberValueCell)
        table.appendChild(tr6)

        const tr7 = document.createElement('tr')
        const facebookLabelCell = document.createElement('td')
        facebookLabelCell.classList.add('footer-info-label-cell')
        facebookLabelCell.textContent = 'Følg oss på:'
        tr7.appendChild(facebookLabelCell)
        const facebookValueCell = document.createElement('td')
        facebookValueCell.classList.add('footer-info-value-cell')
        const facebookLink = this.#createFacebookLink()
        facebookValueCell.appendChild(facebookLink)
        tr7.appendChild(facebookValueCell)
        table.appendChild(tr7)

        container.appendChild(table)
		return container
	}
}

DDComponent.define(Footer)
