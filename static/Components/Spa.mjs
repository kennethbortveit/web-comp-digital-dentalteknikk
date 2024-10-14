import DDComponent from "./DDComponent.mjs";

import Navigation from "./Navigation/Navigation.mjs";
import Header from "./Header/Header.mjs";
import { pipe } from '../utils.mjs'
import Body from './Body.mjs'
import Footer from "./Footer.mjs";


class Spa extends DDComponent
{
	#stylesheetUrl = './static/Components/Spa.css'
    constructor()
    {
        super()
    }

    connectedCallback()
    {
		this.appendExternalStyleSheet(this.#stylesheetUrl)
		const container = this.#createContainer()
		container.appendChild(
			this.#createNavigation(),
		)
		container.appendChild(
			this.#createHeader(),
		)
		container.appendChild(
			DDComponent.createElement(Body),
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
