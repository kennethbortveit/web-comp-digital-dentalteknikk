import DDComponent from './DDComponent.mjs'

export default class Button extends DDComponent {
	static styles = `
		button {
			background-color: var(--blue);
			border: 0px solid var(--black);
			padding: var(--spacing-small);
			cursor: pointer;
			color: var(--white);
			min-width: var(--spacing-xlarge);
			border-radius: var(--spacing-xsmall);
			margin-bottom: var(--spacing-large);
		}
	`

	#btn;
	get onclick() { return this.#btn.onclick }
	set onclick(v) { this.#btn.onclick = v }
	
	constructor() {
		super()
		this.#btn = document.createElement('button')
	}
	
	connectedCallback() {
		this.applyStyles(Button.styles)
		const txt = this.textContent
		this.#btn.appendChild(document.createTextNode(txt))
		this.shadowRoot.appendChild(this.#btn)
	}
}

DDComponent.define(Button)