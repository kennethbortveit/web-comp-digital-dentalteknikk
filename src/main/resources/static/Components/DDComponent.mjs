export default class DDComponent extends HTMLElement
{
    static define = classDefinition => {
        const componentName = this.getComponentName(classDefinition) 
        window.customElements.define(componentName, classDefinition)
    }

    static getComponentName(classDefinition) {
        const formatted = classDefinition.name.toLowerCase()
        const componentName = `dd-${formatted}`
        return componentName
    }

    static createElement(classDefinition) {
        const name = DDComponent.getComponentName(classDefinition)
        const element = document
            .createElement
            .bind(document)(name)
        return element
    }
    
    static createStyleLink(url) {
		const link = (document.createElement.bind(document))('link')
		Object.assign(link, {
			rel: 'stylesheet',
			href: url
		})
		return link
	}
	
	stylesheetUrl = ''

    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(
			DDComponent.createStyleLink('./index.css')
		)
    }
	
	applyStyles(styles) {
		const e = document.createElement('style')
		e.innerHTML = styles
		this.shadowRoot.appendChild(e)
	}
    
    appendExternalStyleSheet(url) {
		if(url) {
			const link = DDComponent.createStyleLink(url)
			this.shadowRoot.appendChild(link)
		} else if(this.stylesheetUrl) {
			this.shadowRoot.appendChild(
				DDComponent.createStyleLink(
					this.stylesheetUrl
				)
			)
		}
	}
}
