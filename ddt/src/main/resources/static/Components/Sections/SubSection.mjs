import DDComponent from "../DDComponent.mjs";
import H3 from '../Header/H3.mjs'

export default class SubSection extends DDComponent {
    constructor() {
        super()
    }

    connectedCallback() {
        const header = this.#getHeader()
        const contentSlot = this.#createContentSlot()
        this.shadowRoot.appendChild(header)
        this.shadowRoot.appendChild(contentSlot)
    }

    #getHeader() {
        const name = this.getAttribute('name')
        const header = document.createElement(
            DDComponent.getComponentName(H3)
        )
        header.setAttribute('text', name)
        return header
    }

    #createContentSlot() {
        const slot = document.createElement('slot')
        slot.setAttribute('name', 'content')
        return slot
    }
}

DDComponent.define(SubSection)