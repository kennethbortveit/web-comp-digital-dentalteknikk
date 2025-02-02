import DDComponent from "../DDComponent.mjs";
import SubSection from "./SubSection.mjs";

export default class Products extends DDComponent {
    static #productImages = [
        {
            src: './Images/products/1_p.png',
            alt: 'Fast protetikk'
        },
        {
            src: './Images/products/2_p.png',
            alt: 'Avtagbar protetikk'
        },
        {
            src: './Images/products/3_p.png',
            alt: 'Implantatretinert protetikk'
        },
        {
            src: './Images/products/4_p.png',
            alt: 'Kombinasjons protetikk'
        },
        {
            src: './Images/products/5_p.png',
            alt: 'Fargeuttak/Innprøving'
        }
    ]

    constructor() {
        super()
    }

    connectedCallback() {
		this.applyStyles(`
			.product-content {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				gap: var(--spacing-small);
			}
			.product-description-item {
				display: flex;
				justify-content: flex-start;
				gap: var(--spacing-small)
			}
			.product-image > img {
				width: 100%;
			}
            .product-description-list {
                list-style: none;
                padding: 0;
            }	
			`)
        const subSection = this.#createSubSection('Egenproduksjon og import')
        subSection.setAttribute('background-color', this.getAttribute('background-color'))
        this.shadowRoot.appendChild(subSection)
    }


    #createSubSection(name) {
        const subSection = document.createElement(
            DDComponent.getComponentName(SubSection)
        )
        subSection.setAttribute('name', name)
        const content = this.#createProductContent()
        content.setAttribute('slot', 'content')
        subSection.appendChild(content)
        return subSection
    }

    #createProductContent() {
        const content = document.createElement('div')
		content.classList.add('product-content')
        const description = this.#createProductBlock(
            this.#createProductDescription()
        )
        content.appendChild(description)
        Products.#productImages.forEach(productImage => {
            const image = this.#createProductImage(productImage)
            const block = this.#createProductBlock(image)
            content.appendChild(block)
        })
        return content
    }

    #createProductBlock(content) {
        const container = document.createElement('div')
		container.classList.add('product-image')
        container.appendChild(content)
        return container
    }

    #createProductDescription() {
        const list = document.createElement('ul')
        list.classList.add('product-description-list')
        const descriptons = [
            {
                text: 'Fast protetikk',
                image: {
                    src: './Images/products/1_tall_fet.svg',
                    alt: 'Nummer 1.'
                }
            },
            {
                text: 'Avtagbar protetikk',
                image: {
                    src: './Images/products/2_tall_fet.svg',
                    alt: 'Nummer 2.'
                }
            },
            {
                text: 'Implantatretinert protetikk',
                image: {
                    src: './Images/products/3_tall_fet.svg',
                    alt: 'Nummer 3.'
                }
            },
            {
                text: 'Kombinasjons protetikk',
                image: {
                    src: './Images/products/4_tall_fet.svg',
                    alt: 'Nummer 4.'
                }
            },
            {
                text: 'Fargeuttak/Innprøving',
                image: {
                    alt: 'Nummer 5.',
                    src: './Images/products/5_tall_fet.svg'
                }
            }
        ]
        descriptons.forEach(desc => {
            const item = document.createElement('li')
			item.classList.add('product-description-item')
            const p = document.createElement('p')
            const textNode = document.createTextNode(desc.text)
            p.appendChild(textNode)
            const image = document.createElement('img')
            image.setAttribute('src', desc.image.src)
            image.setAttribute('alt', desc.image.alt)
            item.appendChild(image)
            item.appendChild(p)
            list.appendChild(item)
        })
        return list
    }

    #createProductImage(productImage) {
        const image = document.createElement('img')
        image.src = productImage.src
        image.alt = productImage.alt
        return image
    }

}

DDComponent.define(Products)
