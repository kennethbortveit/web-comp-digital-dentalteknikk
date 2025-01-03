import DDComponent from "../DDComponent.mjs";
import SubSection from "./SubSection.mjs";

export default class SelfProducedImplant extends DDComponent {
	static productImages = [
		{
			src: './Images/self-produced-implant/1.png',
			alt: 'Createch Medical hybrid abutment'
		},
		{
			src: './Images/self-produced-implant/2.png',
			alt: 'Gingival porselen'
		},
		{
			src: './Images/self-produced-implant/3.png',
			alt: 'Ivoclar ZirCad Prime C 3 monolittiske broer'
		},
		{
			src: './Images/self-produced-implant/4.png',
			alt: 'Semanterte broer'
		},
		{
			src: './Images/self-produced-implant/5.png',
			alt: 'Klinisk foto'
		},
	]
	static styles = `
		.product-description-item {
			display: flex;
			justify-content: flex-start;
			gap: var(--spacing-small);
		}
		.product-container {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: var(--spacing-small);
		}
		.product-image {
			width: 100%;
		}
	`
	constructor() {
		super()
	}
	
	connectedCallback() {
		this.applyStyles(SelfProducedImplant.styles)
		const content = this.#createContent()
		this.shadowRoot.appendChild(content)
	}
	
	#createContent() {
		const container = document.createElement('div')
		const torontoBridgeSubSection = this.#createTorontoBridge()
		container.appendChild(torontoBridgeSubSection)
		return container
	}
	
	#createTorontoBridge() {
		const subSection = DDComponent.createElement(SubSection)
		subSection.setAttribute('name', 'Toronto bridge')
		const content = document.createElement('div')
		content.classList.add('product-container')
		const descriptionBlock = this.#createContentBlock(
			this.#createDescriptions()
		)
		content.appendChild(descriptionBlock)
		for(let picture of SelfProducedImplant.productImages) {
			const pictureBlock = this.#createProductImage(picture)
			content.appendChild(pictureBlock)
		}
		content.setAttribute('slot', 'content')
		subSection.appendChild(content)
		return subSection
	}
	
	#createContentBlock(content) {
		const div = document.createElement('div')
		div.appendChild(content)
		return div
	}
	
	#createDescriptions() {
		const descriptions = [
			{
				text: 'Createch Medical hybrid abutment',
				image: {
					src: './Images/products/1_tall_fet.svg',
					alt: 'Tallet 1'
				}
			},
			{
				text: 'Gingival porselen',
				image: {
					src: './Images/products/2_tall_fet.svg',
					alt: 'Tallet 2'
				}
			},
			{
				text: 'Ivoclar ZirCad Prime C 3 monolittiske broer',
				image: {
					src: './Images/products/3_tall_fet.svg',
					alt: 'Tallet 3'
				}
			},
			{
				text: 'Sementerte broer',
				image: {
					src: './Images/products/4_tall_fet.svg',
					alt: 'Tallet 4'
				}
			},
			{
				text: 'Klinisk foto',
				image: {
					src: './Images/products/5_tall_fet.svg',
					alt: 'Tallet 5'
				}
			},
		]
		const list = document.createElement('ul')
		for(let desc of descriptions) {
			const item = this.#createDescriptionItem(desc)
			list.appendChild(item)
		}
		return list
	}
	
	#createDescriptionItem(data) {
		const item = document.createElement('li')
		item.classList.add('product-description-item')
		const text = this.#createDescriptionText(data.text)
		const image = this.#createDescriptionImage(data)
		item.appendChild(text)
		item.appendChild(image)
		return item
	}
	
	#createDescriptionText(text) {
		const p = document.createElement('p')
		const textNode = document.createTextNode(text)
		p.appendChild(textNode)
		return p
	}
	
	#createDescriptionImage(data) {
		const {image: {src, alt}} = data
		const image = document.createElement('img')
		image.setAttribute('src', src)
		image.setAttribute('alt', alt)
		return image
	}
	
	#createProductImage({src, alt}) {
		const img = document.createElement('img')
		img.classList.add('product-image')
		img.setAttribute('src', src)
		img.setAttribute('alt', alt)
		const block = this.#createContentBlock(img)
		return block
	}
}

DDComponent.define(SelfProducedImplant)
