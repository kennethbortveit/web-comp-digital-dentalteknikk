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
        const item = this.#createItem(e.getAttribute('name'), e)
        this.#items.push({element: e, item, visible: false })
        this.#container.appendChild(item)
    }
    
    observerCallback(entries) {
        const cl = 'active-section'
        this.#items.forEach(it => it.item.classList.remove(cl))
        entries.forEach(e => {
            const i = this.#items.find(i => i.element === e.target)
            i.visible = e.isIntersecting
        })
        const firstVisible = this.#items.find(i => i.visible)
        firstVisible.item.classList.add(cl)
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

    #createItem(item, el) {
        const i = document.createElement(DDComponent.getComponentName(NavigationItem))
        i.setAttribute('label', item)
        i.element = el
        return i
    }
}

DDComponent.define(Navigation)
