import DDComponent from "./DDComponent.mjs";

import Navigation from "./Navigation/Navigation.mjs";
import Header from "./Header/Header.mjs";
import { pipe } from '../utils.mjs'
import Body from './Body.mjs'
import Footer from "./Footer.mjs";


class Spa extends DDComponent
{
	static styles = `
		.main-container {
			overflow: hidden;
			margin-left: auto;
			margin-right: auto;
			width: 100%;
		}

		.body-container {
			margin-left: auto;
			margin-right: auto;
		}

		.header-container {
			margin-left: auto;
			margin-right: auto;
		}

		.footer-container {
			margin-left: auto;
			margin-right: auto;
			background-color: var(--black);
		}
		
		@media (width < 1200px) {
			.body-container {
				width: 100%;
				max-width: var(--inner-max-width);
			}

			.header-container {
				width: 100%;
				max-width: var(--inner-max-width);
			}

			.footer-container {
				width: 100%;
				max-width: var(--inner-max-width);
			}
		}
		@media (1200px <= width) {
			.body-container {
				max-width: var(--inner-max-width);
			}

			.header-container {
				max-width: var(--inner-max-width);
			}

			.footer-container {
				max-width: var(--inner-max-width);
			}
		}
	`
    constructor()
    {
        super()
    }

    connectedCallback()
    {
		this.applyStyles(Spa.styles)
		const container = this.#createContainer()
		const body = DDComponent.createElement(Body)
		const bodyContainer = this.#createBodyContainer()
		bodyContainer.appendChild(body)
		const navigation = this.#createNavigation()
		const header = this.#createHeader()
		const headerContainer = this.#createHeaderContainer()
		const footerContainer = this.#createFooterContainer()
		footerContainer.appendChild(this.#createFooter())
		headerContainer.appendChild(header)
		navigation.addObservedEntry(header)
		body.menuItems.forEach(i => navigation.addObservedEntry(i))
		container.appendChild(
			navigation
		)
		container.appendChild(
			headerContainer
		)
		container.appendChild(
			bodyContainer
		)
		container.appendChild(
			footerContainer
		)
        this.shadowRoot.appendChild(container)
    }
    #createContainer() {
		const container = document.createElement('div')
		container.setAttribute('class', 'main-container')
		return container
	}

	#createHeaderContainer() {
		const c = document.createElement('div')
		c.classList.add('header-container')
		return c
	}

	#createBodyContainer() {
		const c = document.createElement('div')
		c.classList.add('body-container')
		return c
	}

    #createHeader() {
		const header = DDComponent.createElement(Header)
		header.setAttribute('name', 'Forsiden')
		return header;
	}

    #createNavigation = () => pipe(
        DDComponent.getComponentName,
        document.createElement.bind(document)
    )(Navigation)

    #createFooter() {
        const footer = DDComponent.createElement(Footer)
        return footer
    }

	#createFooterContainer() {
		const c = document.createElement('div')
		c.classList.add('footer-container')
		return c
	}
}

DDComponent.define(Spa)