import DDComponent from "../DDComponent.mjs";
import SubSection from "./SubSection.mjs";

export default class DigitalProduction extends DDComponent {
    static #images = [
        {
            src: './Images/digital-production/6.png',
            alt: ''
        },
        {
            src: './Images/digital-production/7.png',
            alt: ''
        },
        {
            src: './Images/digital-production/8.png',
            alt: ''
        }
    ]
	static styles = `
		.digital-production-container {
			display: flex;
			flex-direction: column;
		}
		
		.digital-production-images {
			display: flex;
			gap: var(--spacing-small);
		}
		
		.digital-production-image {
			flex-grow: 1;
			flex-basis: 0;
		}
		
		.digital-production-image > img {
			width: 100%;
		}

        @media (width < 1200px) {
            .digital-production-images {
                flex-direction: column;
            }
        }
        @media (1200px <= width) {
            .digital-production-images {
                flex-direction: row;
            }
        }
		
	`
    constructor() {
        super()
    }

    connectedCallback() {
		this.applyStyles(DigitalProduction.styles)
        const subSection = document.createElement(
            DDComponent.getComponentName(SubSection)
        )
        const subSectionDescription = 'Digital dentalteknikk tar imot og produserer fra digitale og konvensjonelle avtrykk'
        subSection.setAttribute('name', subSectionDescription)
        subSection.setAttribute('background-color', 'var(--red)')
        const content = this.#createContent()
        content.setAttribute('slot', 'content')
        subSection.appendChild(content)
        this.shadowRoot.appendChild(subSection)
    }

    #createContent() {
        const container = document.createElement('div')
		container.classList.add('digital-production-container')
        const images = this.#createImages()
        container.appendChild(images)
        const information = this.#createInformation()
        container.appendChild(information)
        return container
    }

    #createInformation() {
        const information = 'Vi kan lage modellfritt på mindre kasus. Vi freser zirconia, e-max, pmma og peek samt metaller (cocr og titan).'
        const textNode = document.createTextNode(information)
        const paragraph = document.createElement('p')
        paragraph.appendChild(textNode)
        return paragraph
    }

    #createImages() {
        const container = document.createElement('div')
		container.classList.add('digital-production-images')
        DigitalProduction.#images.forEach(image => {
            const block = this.#createImageBlock(image)
            container.appendChild(block)
        })
        return container
    }

    #createImageBlock(imageData) {
		const c = document.createElement('div')
		c.classList.add('digital-production-image')
        const image = document.createElement('img')
        image.src = imageData.src
        image.alt = imageData.alt
		c.appendChild(image)
        return c
    }

}

DDComponent.define(DigitalProduction)
