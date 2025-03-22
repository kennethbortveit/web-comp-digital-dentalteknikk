import DDComponent from "./DDComponent.mjs";

export default class DentalSVG extends DDComponent {
    static styles = `
        :host {
            height: 200px;
        }
    `
    constructor() {
        super()
    }

    connectedCallback() {
        this.applyStyles(DentalSVG.styles)
        const c = document.createElement('div')
        c.innerHTML = `
<svg fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="200px" height="200px" viewBox="0 0 70 70" enable-background="new 0 0 70 70" xml:space="preserve">
    <g>
        <path d="M65.909,5.596c-0.641-0.409-1.462-0.42-2.11-0.026L4.133,41.638c-0.676,0.408-1.048,1.176-0.95,1.958
            c0.097,0.783,0.646,1.436,1.399,1.666l18.664,5.707l2.445,12.145c0.142,0.701,0.646,1.273,1.324,1.501
            c0.208,0.07,0.423,0.104,0.637,0.104c0.48,0,0.954-0.174,1.325-0.502l9.658-8.542l19.824,6.062
            c0.191,0.059,0.389,0.088,0.585,0.088c0.387,0,0.77-0.112,1.1-0.329c0.497-0.328,0.823-0.86,0.889-1.452L66.821,7.5
            C66.904,6.744,66.551,6.006,65.909,5.596z M28.928,58.921l-1.333-6.623l6.555,2.005L28.928,58.921z M57.321,57.206l-24.833-7.593
            l20.105-23.584c0.358-0.42,0.309-1.051-0.112-1.409c-0.419-0.359-1.052-0.309-1.409,0.112L30.405,48.976l-20.373-6.229
            l52.369-31.658L57.321,57.206z"/>
        <path d="M55.524,39.707c0.042,0.006,0.083,0.008,0.124,0.008c0.498,0,0.929-0.371,0.991-0.877l0.186-1.5
            c0.068-0.549-0.321-1.048-0.869-1.115c-0.547-0.073-1.047,0.322-1.115,0.869l-0.186,1.5C54.587,39.141,54.977,39.64,55.524,39.707z
            "/>
        <path d="M54.191,50.396c0.048,0.007,0.096,0.01,0.143,0.01c0.489,0,0.917-0.359,0.989-0.858l0.959-6.691
            c0.078-0.547-0.302-1.053-0.849-1.132c-0.542-0.077-1.052,0.302-1.132,0.849l-0.959,6.691
            C53.265,49.812,53.645,50.317,54.191,50.396z"/>
    </g>
</svg>
        ` 
        this.shadowRoot.appendChild(c)
    }

    #createSVG() {
        const svg = document.createElement('svg')
        svg.setAttribute('width', '100')
        svg.setAttribute('height', '150')
        svg.setAttribute('viewBox', '0 0 100 150')
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        return svg
    }
    #createGroup() {
        const g = document.createElement('g')
        g.setAttribute('fill', 'none')
        g.setAttribute('stroke', '#000000')
        g.setAttribute('stroke-width', '4')
        const path1 = document.createElement('path')
        path1.setAttribute('d', 'M 50 10 Q 30 30, 30 50 Q 30 70, 40 90 Q 40 110, 30 130 Q 70 130, 60 90 Q 70 70, 70 50 Q 70 30, 50 10')
        path1.setAttribute('fill', '#ffffff')
        g.appendChild(path1)
        const path2 = document.createElement('path')
        path2.setAttribute('d', 'M 45 40 Q 50 30, 55 40')
        path2.setAttribute('stroke-width', '2')
        g.appendChild(path2)
        const path3 = document.createElement('path')
        path3.setAttribute('d', 'M 40 50 Q 50 40, 60 50')
        path3.setAttribute('stroke-width', '2')
        g.appendChild(path3)
        return g
    }
}

customElements.define('dd-dental-svg', DentalSVG)