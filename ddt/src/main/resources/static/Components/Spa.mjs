import DDComponent from "./DDComponent.mjs";

import Navigation from "./Navigation/Navigation.mjs";
import H1 from './Heading/H1.mjs'
import { pipe } from '../utils.mjs'
import Body from './Body.mjs'
import Footer from "./Footer.mjs";


class Spa extends DDComponent
{
    constructor()
    {
        super()
    }

    connectedCallback()
    {
        this.shadowRoot.appendChild(this.#createNavigation())
        this.shadowRoot.appendChild(this.#createHeader())
        this.shadowRoot.appendChild(
            document.createElement(
                DDComponent.getComponentName(Body)
            )
        )
        this.shadowRoot.appendChild(this.#createFooter())
    }

    #createHeader = () => pipe(
        DDComponent.getComponentName,
        document.createElement.bind(document),
        e => {
            e.setAttribute('text', 'Digital Dentalteknikk')
            return e
        }
        )(H1)

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