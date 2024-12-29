import DDComponent from '../DDComponent.mjs'
import NavigationItem from '../Navigation/NavigationItem.mjs'

export default class Navigation extends DDComponent
{
    static activeSectionClassName = 'active-section'
	static styles = `
        :host {
            margin-bottom: var(--spacing-large);
        }
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
        .${Navigation.activeSectionClassName} {
            background-color: var(--blue);
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
        entries.forEach(e => {
            const i = this.#items.find(i => i.element === e.target)
            i.visible = e.isIntersecting
        })
    }

    #distanceToVerticalMiddle(e) {
        const rect = e.getBoundingClientRect()
        const viewPortHeight = window.innerHeight || document.documentElement.clientHeight
        const viewPortMiddle = (viewPortHeight / 2) * 0.5
        const distance = Math.abs(rect.top - viewPortMiddle)
        return distance
    }


    connectedCallback() {
		this.applyStyles(Navigation.styles)
        window.addEventListener('scroll', () => {
            this.#items.forEach(i => {
                i.distance = this.#distanceToVerticalMiddle(i.element)
                i.item.classList.remove(Navigation.activeSectionClassName)
                i.item.removeActiveSection()
            })
            const closest = this.#items.reduce((a, b) => a.distance < b.distance ? a : b)
            if(closest) {
                closest.item.classList.add(Navigation.activeSectionClassName)
                closest.item.addActiveSection()
            }

        })
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
