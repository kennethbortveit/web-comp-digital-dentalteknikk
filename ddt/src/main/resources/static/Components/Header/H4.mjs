import DDComponent from "../DDComponent.mjs";

export default class H4 extends DDComponent {
    constructor() {
        super()
    }

    connectedCallback() {
        const header = document.createElement('h4')
        const text = this.getAttribute('text')
        header.appendChild(
            document.createTextNode(text)
        )
        this.shadowRoot.appendChild(header)
    }
}

DDComponent.define(H4)
