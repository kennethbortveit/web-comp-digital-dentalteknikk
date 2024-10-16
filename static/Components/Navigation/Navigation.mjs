import DDComponent from '../DDComponent.mjs'
import NavigationItem from '../Navigation/NavigationItem.mjs'

export default class Navigation extends DDComponent
{
    static #items = [
        'Forsiden',
        'Om oss',
        'Produkter',
        'Egenproduksjon implantater',
        'Digital produksjon',
        'Kontakt'
    ]
    
    #stylesheetUrl = './static/Components/Navigation/Navigation.css'

    constructor() {
        super()
    }

    connectedCallback() {
	this.appendExternalStyleSheet(this.#stylesheetUrl)
        const container = this.#createContainer()
        this.#appendItems(container)
        this.shadowRoot.appendChild(container)
    }

    #createContainer() {
        const div = document.createElement('div')
        div.setAttribute('class', 'navigation-container')
        return div
    }

    #appendItems(container) {
        Navigation.#items.forEach(element => {
            container.appendChild(this.#createItem(element))
        });
    }

    #createItem(item) {
        const i = document.createElement(DDComponent.getComponentName(NavigationItem))
        i.setAttribute('label', item)
        return i
    }
}

DDComponent.define(Navigation)
