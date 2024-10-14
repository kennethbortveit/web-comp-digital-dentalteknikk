import DDComponent from "../DDComponent.mjs";
import SubSection from "./SubSection.mjs";

export default class DigitalProduction extends DDComponent {
    static #images = [
        {
            src: './static/Images/digital-production/6.png', 
            alt: ''
        },
        {
            src: './static/Images/digital-production/7.png',
            alt: ''
        },
        {
            src: './static/Images/digital-production/8.png',
            alt: ''
        }
    ]
    constructor() {
        super()
    }

    connectedCallback() {
        const subSection = document.createElement(
            DDComponent.getComponentName(SubSection)
        )
        const subSectionDescription = 'Digital dentalteknikk tar imot og produserer fra digitale og konvensjonelle avtrykk'
        subSection.setAttribute('name', subSectionDescription)
        const content = this.#createContent()
        content.setAttribute('slot', 'content')
        subSection.appendChild(content)
        this.shadowRoot.appendChild(subSection)
    }

    #createContent() {
        const container = document.createElement('div')
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
        DigitalProduction.#images.forEach(function(image) {
            const block = this.#createImageBlock(image)
            container.appendChild(block)
        }.bind(this))
        return container
    }

    #createImageBlock(imageData) {
        const image = document.createElement('img')
        image.src = imageData.src
        image.alt = imageData.alt
        return image
    }

}

DDComponent.define(DigitalProduction)
