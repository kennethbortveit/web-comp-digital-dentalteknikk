import DDComponent from "../DDComponent.mjs"
import H2 from '../Heading/H2.mjs'

export default class Section extends DDComponent {
    static styles = `
        :host {
            scroll-margin-top: var(--spacing-large);
        }
    `
    constructor() {
        super()
    }

    connectedCallback() {
        this.applyStyles(Section.styles)
        const container = this.#createContainer()
        const header = this.#createHeader()
        container.appendChild(header)
        const content = document.createElement('slot')
        content.setAttribute('name', 'content')
        container.appendChild(content)
        this.shadowRoot.appendChild(container)
    }

    #createContainer() {
        const container = document.createElement('div')
        return container
    } 

    #createHeader() {
        const header = document.createElement(
            DDComponent.getComponentName(H2)
            )
        header.setAttribute('text', this.getAttribute('name'))
        return header
    }
}

DDComponent.define(Section)