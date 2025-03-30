import DDComponent from '../DDComponent.mjs'
import NavigationItem from '../Navigation/NavigationItem.mjs'

export default class Navigation extends DDComponent
{
    static OPEN_ANIMATION_CLASS_NAME = 'nav-items-container-open'
    static CLOSE_ANIMATION_CLASS_NAME = 'nav-items-container-closed'
    static activeSectionClassName = 'active-section'
	static styles = `
        :host {
            margin-bottom: var(--spacing-large);
        }
        .nav-toggle {
            border: 6px solid var(--black);
            width: var(--spacing-large);
            height: var(--spacing-large);
        }
        @media (width <= 1200px) {
            .navigation-container {
                flex-direction: column;
            }
            .${Navigation.CLOSE_ANIMATION_CLASS_NAME} {
                animation: slideUp 1s ease-in-out forwards;
            }
            .${Navigation.OPEN_ANIMATION_CLASS_NAME} {
                animation: slideDown 1s ease-in-out forwards;
            }
            .nav-toggle {
                display: block;
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
            .nav-toggle {
                display: none;
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
        @keyframes slideDown {
            0% {
                opacity: 0;
                height: 0;
            }
            100% {
                opacity: 1;
                height: auto;
            }
        }
        @keyframes slideUp {
            0% {
                opacity: 1;
                height: auto;
            }
            100% {
                opacity: 0;
                height: 0;
            }
        }
	`

    #observer;
    #container;
    #itemsContainer;
    #items;
    #mobileMatcher
    #desktopMatcher

    constructor() {
        super()
        this.#observer = new IntersectionObserver(this.observerCallback.bind(this))
        this.#container = this.#createContainer()
        this.#itemsContainer = this.#createItemsContainer()
        this.#items = []
        this.#mobileMatcher = window.matchMedia('(width < 1200px)')
        this.#desktopMatcher = window.matchMedia('(width >= 1200px)')
    }

    addObservedEntry(e) {
        this.#observer.observe(e)
        const item = this.#createItem(e.getAttribute('name'), e)
        this.#items.push({element: e, item, visible: false })
        this.#itemsContainer.appendChild(item)
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
    #createToggle() {
        const btn = document.createElement('button')
        btn.setAttribute('type', 'button')
        btn.onclick = this.#onToggleClick.bind(this)
        btn.classList.add('nav-toggle')
        btn.textContent = 'Toggle'
        return btn
    }

    #onToggleClick() {
        if(this.#itemsContainer.classList.contains(Navigation.OPEN_ANIMATION_CLASS_NAME)) {
            this.#itemsContainer.classList.remove(Navigation.OPEN_ANIMATION_CLASS_NAME)
            this.#itemsContainer.classList.add(Navigation.CLOSE_ANIMATION_CLASS_NAME)
        } else {
            this.#itemsContainer.classList.remove(Navigation.CLOSE_ANIMATION_CLASS_NAME)
            this.#itemsContainer.classList.add(Navigation.OPEN_ANIMATION_CLASS_NAME)
        }
    }
    
    #createItemsContainer() {
        const c = document.createElement('div')
        c.classList.add(Navigation.CLOSE_ANIMATION_CLASS_NAME)
        return c
    }

    connectedCallback() {
        this.#container.insertBefore(this.#createToggle(), this.#container.firstChild)
        this.#container.appendChild(this.#itemsContainer)
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
