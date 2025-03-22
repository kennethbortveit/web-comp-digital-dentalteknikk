import DDComponent from "../DDComponent.mjs";

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
        }
    `

    connectedCallback() {
        this.applyStyles(PendingOperation.styles)
    }
}

customElements.define('dd-pending-operation', PendingOperation)