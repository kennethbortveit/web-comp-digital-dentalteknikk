import DDComponent from '../DDComponent.mjs'
import NavigationItem from '../Navigation/NavigationItem.mjs'

export default class Navigation extends DDComponent
{
	static styles = `
		.navigation-container {
            position: fixed;
            top: 0;
            left: 0;
            background-color: var(--white);
			display: flex;
			justify-content: center;
			align-items: center;
			gap: var(--spacing-medium);
            width: 100%;
            height: var(--spacing-large);
		}

        .active-section {
            background-color: var(--blue);
            color: var(--white);
        }
	`

    #observer;
    #container;
    #items;

    constructor() {
        super()
        this.#observer = new IntersectionObserver(this.observerCallback.bind(this))
        this.#container = this.#createContainer()
        this.#items = []
    }

    addObservedEntry(e) {
        this.#observer.observe(e)
        const item = this.#createItem(e.getAttribute('name'))
        this.#items.push({element: e, item })
        this.#container.appendChild(item)
    }
    
    observerCallback(entries) {
        entries.forEach(e => {
            console.debug('observer entries', e, e.isIntersecting, this.#items)
            const i = this.#items.find(i => i.element === e.target)
            console.debug('Item', i)
            if (e.isIntersecting) {
                i.item.classList.add('active-section')
                console.debug('Added class active section.')
            } else {
                i.item.classList.remove('active-section')
            }
        })
    }

    connectedCallback() {
		this.applyStyles(Navigation.styles)
        this.shadowRoot.appendChild(this.#container)
    }

    #createContainer() {
        const div = document.createElement('div')
        div.setAttribute('class', 'navigation-container')
        return div
    }

    #createItem(item) {
        const i = document.createElement(DDComponent.getComponentName(NavigationItem))
        i.setAttribute('label', item)
        return i
    }
}

DDComponent.define(Navigation)
