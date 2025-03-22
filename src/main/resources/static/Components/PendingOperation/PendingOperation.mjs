import DDComponent from "../DDComponent.mjs";
import DentalSVG from "../DentalSVG.mjs";

export default class PendingOperation extends DDComponent {

    static styles = `
        :host {
            background-color: #000000bb;
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 5000;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .pending-operation-svg-container {
            background-color: #000000;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `

    connectedCallback() {
        this.applyStyles(PendingOperation.styles)
        const c = this.#createSVGContainer()
        c.appendChild(new DentalSVG())
        this.shadowRoot.appendChild(c)
    }

    #createSVGContainer() {
        const c = document.createElement('div')
        c.classList.add('pending-operation-svg-container')
        return c
    }
}

customElements.define('dd-pending-operation', PendingOperation)