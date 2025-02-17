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
			flex-basis: 0;
			flex-grow: 1;
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

		.ddt-logo-container {
			width: 100%;
		}

		.ddt-header-container {
			width: 100%;
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
		const c = document.createElement('div')
		c.classList.add('ddt-header-container')
		return c
	}
	
	#createLogo() {
		const container = document.createElement('div')
		container.classList.add('ddt-logo-container')
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
