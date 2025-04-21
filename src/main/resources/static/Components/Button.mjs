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
		if(this.width) {
			this.#btn.style.width = this.width
		}
		if(this.height) {
			this.#btn.style.height = this.height
		}
		if(this.fontSize) {
			this.#btn.style.fontSize = this.fontSize
		}
		this.shadowRoot.appendChild(this.#btn)
	}

	static Builder = class {
		#fontSize
		#height
		#width

		setFontSize(v) { this.#fontSize = v; return this; }
		setHeight(v) { this.#height = v; return this; }
		setWidth(v) { this.#width = v; return this; }

		build() {
			const button = new Button()
			button.fontSize = this.#fontSize
			button.height = this.#height
			button.width = this.#width
			return button
		}

	}
}

DDComponent.define(Button)