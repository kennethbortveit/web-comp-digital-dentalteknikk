import DDComponent from "../DDComponent.mjs";

export default class Header extends DDComponent {
	static #images = {
		logo: {
			src: './Images/front-page/dd-logo.svg',
			alt: 'Digital Dentalteknikk logo.'
		},
		certification: {
			src: './Images/front-page/mester-logo.svg',
			alt: 'Mester og norges tanntekniker forbund logoer.'
		}
	}
	
	static styles = `
		.ddt-logo {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.ddt-logo > img {
			width: 100%;
		}

		.ddt-certification {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.ddt-certification > img {
			width: 100%;
			height: 100px;
		}
	`

	constructor() {
		super()
	}
    get isHeader() { return true }
	
	connectedCallback() {
		this.applyStyles(Header.styles)
		const container = this.#createContainer()
		const logoImage = this.#createLogo()
		const certificationImage = this.#createCertification()
		container.appendChild(logoImage)
		container.appendChild(certificationImage)
		this.shadowRoot.appendChild(container)
	}
	
	#createContainer() {
		return document.createElement('div')
	}
	
	#createLogo() {
		const container = document.createElement('div')
		const image = document.createElement('img')
		container.setAttribute('class', 'ddt-logo')
		image.setAttribute('src', Header.#images.logo.src)
		image.setAttribute('alt', Header.#images.logo.alt)
		container.appendChild(image)
		return container
	}
	
	#createCertification() {
		const container = document.createElement('div')
		const image = document.createElement('img')
		Object.assign(image, Header.#images.certification)
		container.appendChild(image)
		container.setAttribute('class', 'ddt-certification')
		return container
	}
}

DDComponent.define(Header)
