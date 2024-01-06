import DDComponent from "../DDComponent.mjs";

export default class H3 extends DDComponent {
    constructor() {
        super()
    }

    connectedCallback() {
        const text = this.getAttribute('text')
        const textNode = document.createTextNode(text)
        const header = document.createElement('h3')
        header.appendChild(textNode)
        this.shadowRoot.appendChild(header)
    }
}

DDComponent.define(H3)