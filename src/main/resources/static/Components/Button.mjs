import DDComponent from './DDComponent.mjs'

export default class Button extends DDComponent {
	fontSize
	width
	height

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
		@media (width < 1200px) {
			button {
				width: var(--spacing-xxlarge);
				height: var(--spacing-xlarge);
				font-size: 32px;
			}
		}
		
		@media (width >= 1200px) {
			button {
				width: var(--spacing-xlarge);
				height: var(--spacing-large);
			}
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