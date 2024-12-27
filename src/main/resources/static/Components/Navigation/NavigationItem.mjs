import DDComponent from '../DDComponent.mjs'

export default class NavigationItem extends DDComponent
{
	static styles = `
		div {
			color: var(--grey);
			padding: var(--spacing-small);
		}
		div:hover {
			cursor: pointer;
			color: var(--white);
			background-color: var(--blue);
		}
	`
	constructor() {
		super()
	}

	connectedCallback() {
		this.applyStyles(NavigationItem.styles)
		const container = this.#createContainer()
		const text = this.#createText()
		container.appendChild(text)
		this.shadowRoot.appendChild(container)
	} 

	#createContainer() {
		const div = document.createElement('div')
		return div
	}

	#createText() {
		const container = document.createElement('span')
		const label = this.getAttribute('label')
		const labelText = document.createTextNode(label)
		container.appendChild(labelText)
		return container
	}
}

DDComponent.define(NavigationItem)
