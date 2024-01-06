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

    constructor() {
        super()
        this.attachShadow({mode: 'open'})
    }
}