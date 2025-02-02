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
	static zirconiaImages = [
		{
			src: './Images/self-produced-implant/zirconia/1.png',
			alt: 'Design forslag til tannlege'
		},
		{
			src: './Images/self-produced-implant/zirconia/2.png',
			alt: 'Digital fil med scan body`er'
		},
		{
			src: './Images/self-produced-implant/zirconia/3.png',
			alt: 'Metallskjeletter for individuelle distanser og base bridges'
		},
		{
			src: './Images/self-produced-implant/zirconia/4.png',
			alt: 'Ferdig zirconia og metallskjeletter for kroner - base bridges'
		},
		{
			src: './Images/self-produced-implant/zirconia/5.png',
			alt: 'Klinisk foto. Tannerstatninger lagd litt lyse da restannsett skal blekes senere'
		}
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
		.zirconia-sub-section {
			margin-top: var(--spacing-large);
		}
		.product-description-list {
			list-style: none;
			padding: 0;
			margin: 0;
			font-size: var(--font-size-list);
		}	
		.product-description-item > p {
			margin-top: var(--spacing-xsmall);
			margin-bottom: var(--spacing-xsmall);
			padding: 0;
		}
		.product-image-number {
			width: var(--product-image-number-size);
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
		torontoBridgeSubSection.setAttribute('background-color', 'var(--blue)')
		const zirconiaSubSection = this.#createZirconia()
		zirconiaSubSection.setAttribute('background-color', 'var(--blue)')
		container.appendChild(torontoBridgeSubSection)
		container.appendChild(zirconiaSubSection)
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

	#createZirconia() {
		const subSection = DDComponent.createElement(SubSection)
		subSection.setAttribute('name', 'Individuelle distanser og bar bridges med zirconia')
		subSection.classList.add('zirconia-sub-section')
		const content = document.createElement('div')
		content.classList.add('product-container')
		const descriptionBlock = this.#createContentBlock(
			this.#createZirconiaDescriptions()
		)
		content.appendChild(descriptionBlock)
		content.setAttribute('slot', 'content')
		subSection.appendChild(content)
		for(let picture of SelfProducedImplant.zirconiaImages) {
			const pictureBlock = this.#createProductImage(picture)
			content.appendChild(pictureBlock)
		}
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
		list.classList.add('product-description-list')
		for(let desc of descriptions) {
			const item = this.#createDescriptionItem(desc)
			list.appendChild(item)
		}
		return list
	}

	#createZirconiaDescriptions() {
		const descriptions = [
			{
				text: 'Design forslag til tannlege',
				image: {
					src: './Images/products/1_tall_fet.svg',
					alt: 'Tallet 1'
				}
			},
			{
				text: 'Digital fil med scan body`er',
				image: {
					src: './Images/products/2_tall_fet.svg',
					alt: 'Tallet 2'
				}
			},
			{
				text: 'Metallskjeletter for individuelle distanser og base bridges',
				image: {
					src: './Images/products/3_tall_fet.svg',
					alt: 'Tallet 3'
				}
			},
			{
				text: 'Ferdig zirconia og metallskjeletter for kroner - base bridges',
				image: {
					src: './Images/products/4_tall_fet.svg',
					alt: 'Tallet 4'
				}
			},
			{
				text: 'Klinisk foto. Tannerstatninger lagd litt lyse da restannsett skal blekes senere',
				image: {
					src: './Images/products/5_tall_fet.svg',
					alt: 'Tallet 5'
				}
			}
		];
		const list = document.createElement('ul')
		list.classList.add('product-description-list')
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
		image.classList.add('product-image-number')
		item.appendChild(image)
		item.appendChild(text)
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
