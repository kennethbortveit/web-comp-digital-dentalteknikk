import DDComponent from "./DDComponent.mjs";
import H4 from "./Heading/H4.mjs";
import Map from "./Map.mjs";

export default class Footer extends DDComponent {
    static styles = `
        .footer-container {
            color: var(--white);
            padding: var(--spacing-medium);
            display: flex;
            justify-content: space-between;
            gap: var(--spacing-medium);
            max-width: var(--inner-max-width);
            margin-left: auto;
            margin-right: auto;
        }

        .footer-info {
            flex-basis: 0px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: var(--spacing-medium);
        }

        .footer-map {
            flex-basis: 0px;
            flex-grow: 1;
        }

        .footer-info-pair {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }
        .footer-info-pair > p {
            margin: 0px;
            padding: 0px;
        }
        .footer-info-pair > img {
            width: var(--spacing-medium);
            height: var(--spacing-medium);
        }
        .footer-info-pair-label {
            color: var(--grey);
        }
        .info-block {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-small);
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

    #createInfoBlock(keyValuePairs) {
        const container = document.createElement('div')
        container.setAttribute('class', 'info-block')
        for(let pair of keyValuePairs) {
            container.appendChild(
                this.#createInfoPair(pair)
            )
        }
        return container
    } 

    #createInfoPair(keyValuePair) {
        const container = document.createElement('div')
        container.setAttribute('class', 'footer-info-pair')
        const label = this.#createInfoLabel(keyValuePair.label)
        container.appendChild(label)
        container.appendChild(keyValuePair.element)
        return container
    }

    #createInfoLabel(text) {
        const label = document.createElement('p')
        label.setAttribute('class', 'footer-info-pair-label')
        label.appendChild(
            document.createTextNode(text)
        )
        return label
    }

    #createInfoText(text) {
        const p = document.createElement('p')
        p.appendChild(
            document.createTextNode(text)
        )
        return p
    }

    #createFacebookLink() {
        const image = document.createElement('img')
        image.src = './Images/footer/Facebook_logo_2.svg'
        image.alt = 'Facebook logo'
        return image
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
        const header = DDComponent.createElement(H4)
        header.setAttribute('text', 'Digital Dentalteknikk')
        container.appendChild(header)

        const contactInfoBlock = this.#createInfoBlock([
            {
                label: 'Kontaktperson:', 
                element: this.#createInfoText('Morten Iversen'),
            },
            {
                label: 'Telefon:',
                element: this.#createInfoText('22 42 12 39')
            },
            {
                label: 'E-post:',
                element: this.#createInfoText('ddtpost@online.no')
            }
        ])
        container.appendChild(contactInfoBlock)

        const addressInfoBlock = this.#createInfoBlock([
            {
                label: 'Postadresse:',
                element: this.#createInfoText('Postboks 1614 Vika, 0119 Oslo')
            },
            {
                label: 'Besøksadresse:',
                element: this.#createInfoText('Øvre Vollgate 6, 0158 Oslo')
            },
            {
                label: 'Org. nr.:',
                element: this.#createInfoText('997 034 406')
            }
        ])
        container.appendChild(addressInfoBlock)

        const socialMediaInfoBlock = this.#createInfoBlock([
            {
                label: 'Følg oss på:',
                element: this.#createFacebookLink()
            }
        ])
        container.appendChild(socialMediaInfoBlock)
		return container
	}
}

DDComponent.define(Footer)
