import DDComponent from "../DDComponent.mjs";
import { pipe } from '../../utils.mjs'


export default class H1 extends DDComponent {
    constructor() {
        super()
    }

    connectedCallback() {
        const text = this.getAttribute('text')
        const textNode = document.createTextNode(text)
        const header = document.createElement('h1')
        header.appendChild(textNode)
        this.shadowRoot.appendChild(header)
    }
}

DDComponent.define(H1)