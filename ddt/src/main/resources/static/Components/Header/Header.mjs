import DDComponent from "../DDComponent.mjs";
import H1 from "../Heading/H1.mjs";

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

	constructor() {
		super()
	}
	
	connectedCallback() {
		const container = this.#createContainer()
		const heading = this.#createHeading()
		const logoImage = this.#createLogo()
		const certificationImage = this.#createCertification()
		container.appendChild(heading)
		container.appendChild(logoImage)
		container.appendChild(certificationImage)
		this.shadowRoot.appendChild(container)
	}
	
	#createHeading() {
		const heading = DDComponent.createElement(H1)
		heading.setAttribute('text', 'Digital Dentalteknikk')
		return heading
	}
	
	#createContainer() {
		return document.createElement('div')
	}
	
	#createLogo() {
		const image = document.createElement('img')
		image.setAttribute('src', Header.#images.logo.src)
		image.setAttribute('alt', Header.#images.logo.alt)
		return image
	}
	
	#createCertification() {
		const image = document.createElement('img')
		Object.assign(image, Header.#images.certification)
		return image
	}
}

DDComponent.define(Header)