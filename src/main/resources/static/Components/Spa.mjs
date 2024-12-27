import DDComponent from "./DDComponent.mjs";

import Navigation from "./Navigation/Navigation.mjs";
import Header from "./Header/Header.mjs";
import { pipe } from '../utils.mjs'
import Body from './Body.mjs'
import Footer from "./Footer.mjs";


class Spa extends DDComponent
{
	#stylesheetUrl = './Components/Spa.css'
    constructor()
    {
        super()
    }

    connectedCallback()
    {
		this.appendExternalStyleSheet(this.#stylesheetUrl)
		const container = this.#createContainer()
		const body = DDComponent.createElement(Body)
		const navigation = this.#createNavigation()
		body.menuItems.forEach(i => navigation.addObservedEntry(i))
		container.appendChild(
			navigation
		)
		container.appendChild(
			this.#createHeader(),
		)
		container.appendChild(
			body
		)
		container.appendChild(
			this.#createFooter()
		)
        this.shadowRoot.appendChild(container)
    }
    #createContainer() {
		const container = document.createElement('div')
		container.setAttribute('class', 'main-container')
		return container
	}

    #createHeader() {
		const header = DDComponent.createElement(Header)
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
}

DDComponent.define(Spa)