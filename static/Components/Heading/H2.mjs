import DDComponent from "../DDComponent.mjs";

export default class H2 extends DDComponent {
    constructor() {
        super()
        this.stylesheetUrl = './Components/Heading/H2.css'
    }

    connectedCallback() {
		this.appendExternalStyleSheet()
        const header = this.#createText()
        this.shadowRoot.appendChild(header)
    }

    #createText() {
        const text = this.getAttribute('text')
        const container = document.createElement('h2')
        const textNode = document.createTextNode(text)
        container.appendChild(textNode)
        return container
    }
}

DDComponent.define(H2)