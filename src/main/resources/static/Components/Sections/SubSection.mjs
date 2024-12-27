import DDComponent from "../DDComponent.mjs";
import H3 from '../Heading/H3.mjs'

export default class SubSection extends DDComponent {
    constructor() {
        super()
    }

    static styles = `
        .sub-section-content {
            background-color: var(--blue);
            color: var(--white);
            padding: var(--spacing-small);
            height: 100%;
        }
    `

    connectedCallback() {
        this.applyStyles(SubSection.styles)
        const header = this.#getHeader()
        const container = this.#createContentContainer()
        const contentSlot = this.#createContentSlot()
        container.appendChild(contentSlot)
        this.shadowRoot.appendChild(header)
        this.shadowRoot.appendChild(container)
    }

    #getHeader() {
        const name = this.getAttribute('name')
        const header = document.createElement(
            DDComponent.getComponentName(H3)
        )
        header.setAttribute('text', name)
        return header
    }
    
    #createContentContainer() {
		const container = document.createElement('div')
		container.setAttribute('class', 'sub-section-content')
		return container
	}

    #createContentSlot() {
        const slot = document.createElement('slot')
        slot.setAttribute('name', 'content')
        return slot
    }
}

DDComponent.define(SubSection)
