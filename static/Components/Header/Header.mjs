import DDComponent from "../DDComponent.mjs";
import H1 from "../Heading/H1.mjs";

export default class Header extends DDComponent {
	static #images = {
		logo: {
			src: './static/Images/front-page/dd-logo.svg',
			alt: 'Digital Dentalteknikk logo.'
		},
		certification: {
			src: './static/Images/front-page/mester-logo.svg',
			alt: 'Mester og norges tanntekniker forbund logoer.'
		}
	}
	
	#stylesheetUrl = './static/Components/Header/Header.css'

	constructor() {
		super()
	}
	
	connectedCallback() {
		this.appendExternalStyleSheet(this.#stylesheetUrl)
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
