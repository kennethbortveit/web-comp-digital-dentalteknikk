import DDComponent from '../DDComponent.mjs'

export default class NavigationItem extends DDComponent
{
	static styles = `
		div {
			color: var(--grey);
			padding: var(--spacing-small);
		}
		.active-section {
			color: var(--white);
		}
		div:hover {
			cursor: pointer;
			color: var(--white);
			background-color: var(--blue);
		}
	`

	#el
	#text

	set element(v) { this.#el = v }

	constructor() {
		super()
		this.onclick = this.navigateTo.bind(this)
	}

	removeActiveSection() {
		this.#text.classList.remove('active-section')
	}

	addActiveSection() {
		this.#text.classList.add('active-section')
	}

	connectedCallback() {
		this.applyStyles(NavigationItem.styles)
		const container = this.#createContainer()
		this.#text = this.#createText()
		container.appendChild(this.#text)
		this.shadowRoot.appendChild(container)
	} 

	navigateTo() {
		if(this.#el && this.#el.isHeader) window.scrollTo({
			top: 0,
			behavior: 'smooth'
		}) 
		else if(this.#el) this.#el.scrollIntoView({ behavior: 'smooth' })
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
