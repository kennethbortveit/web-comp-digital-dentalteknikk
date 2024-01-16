import DDComponent from '../DDComponent.mjs'

export default class NavigationItem extends DDComponent
{
	#stylesheetUrl = './Components/Navigation/NavigationItem.css'
    constructor() {
        super()
    }

    connectedCallback() {
		this.appendExternalStyleSheet(this.#stylesheetUrl)
        const container = this.#createContainer()
        const text = this.#createText()
        container.appendChild(text)
        this.shadowRoot.appendChild(container)
    } 

    #createContainer() {
        const div = document.createElement('div')
        return div
    }

    #createText() {
        const container = document.createElement('span')
        const label = this.getAttribute('label')
        const labelText = document.createTextNode(label)
        container.appendChild(labelText)
        return container
    }
}

DDComponent.define(NavigationItem)