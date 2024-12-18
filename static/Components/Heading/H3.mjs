import DDComponent from "../DDComponent.mjs";

export default class H3 extends DDComponent {
    constructor() {
        super()
        this.stylesheetUrl = './static/Components/Heading/H3.css'
    }

    connectedCallback() {
		this.appendExternalStyleSheet()
        const text = this.getAttribute('text')
        const textNode = document.createTextNode(text)
        const header = document.createElement('h3')
        header.appendChild(textNode)
        this.shadowRoot.appendChild(header)
    }
}

DDComponent.define(H3)
