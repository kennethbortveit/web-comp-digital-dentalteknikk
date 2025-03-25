import DDComponent from '../DDComponent.mjs'
import NavigationItem from '../Navigation/NavigationItem.mjs'

export default class Navigation extends DDComponent
{
    static activeSectionClassName = 'active-section'
	static styles = `
        :host {
            margin-bottom: var(--spacing-large);
        }
        @media (width <= 1200px) {
            .navigation-container {
                flex-direction: column;
            }
        }
        @media (width > 1200px) {
            .navigation-container {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: var(--spacing-medium);
                height: var(--spacing-large);
                flex-direction: row;
            }
        }
        .navigation-container {
                position: fixed;
                top: 0;
                left: 0;
                background-color: var(--white);
                width: 100%;
                display: flex;
        }
        .${Navigation.activeSectionClassName} {
            background-color: var(--blue);
        }
	`

    #observer;
    #container;
    #items;
    #mobileMatcher
    #desktopMatcher

    constructor() {
        super()
        this.#observer = new IntersectionObserver(this.observerCallback.bind(this))
        this.#container = this.#createContainer()
        this.#items = []
        this.#mobileMatcher = window.matchMedia('(width < 1200px)')
        this.#desktopMatcher = window.matchMedia('(width >= 1200px)')
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
        this.#onDesktopMatch()
        this.#onMobileMatch()
        window.addEventListener('resize', this.#onDesktopMatch.bind(this))
        window.addEventListener('resize', this.#onMobileMatch.bind(this))
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

    disconnectedCallback() {
        this.removeEventListener('change', this.#onDesktopMatch)
        this.removeEventListener('change', this.#onMobileMatch)
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

    #onDesktopMatch() {
        console.debug(this.#desktopMatcher)
        if(this.#desktopMatcher.matches) {
            console.debug('desktop matches...')
        }    
    }

    #onMobileMatch() {
        console.debug(this.#mobileMatcher)
        if(this.#mobileMatcher.matches) {
            console.debug('mobile matches...')
        }
    }
}

DDComponent.define(Navigation)
