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
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid var(--white);
            border-top: 4px solid var(--blue);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    `

    connectedCallback() {
        this.applyStyles(PendingOperation.styles)
        this.shadowRoot.appendChild(this.createSpinner())
    }

    createSpinner() {
        const c = document.createElement('div')
        c.classList.add('spinner')
        return c
    } 
}

customElements.define('dd-pending-operation', PendingOperation)