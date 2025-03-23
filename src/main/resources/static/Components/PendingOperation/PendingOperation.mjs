import DDComponent from "../DDComponent.mjs";

export default class PendingOperation extends DDComponent {
    static ENABLE_REQUESTED_EVENT_ID = '8b5e5426-364c-469f-a642-3389597567cb'
    static DISABLE_REQUESTED_EVENT_ID = 'b4ae0f68-0c74-4c9f-94d6-7500e096ebf8'
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

    #enabled;

    constructor() {
        super()
        this.#enabled = false
    }

    connectedCallback() {
        window.addEventListener(
            PendingOperation.ENABLE_REQUESTED_EVENT_ID, 
            this.onEnableRequested.bind(this)
        )
        window.addEventListener(
            PendingOperation.DISABLE_REQUESTED_EVENT_ID, 
            this.onDisableRequested.bind(this)
        )
        this.render()
    }
    disconnectedCallback() { 
        window.removeEventListener(
            PendingOperation.ENABLE_REQUESTED_EVENT_ID, 
            this.onEnableRequested
        )
        window.removeEventListener(
            PendingOperation.DISABLE_REQUESTED_EVENT_ID,
            this.onDisableRequested
        )
    }

    clear() {
        while(this.shadowRoot.firstChild) {
            this.shadowRoot.removeChild(this.shadowRoot.lastChild)
        }
    }

    onEnableRequested() {
        this.#enabled = true
        this.render()
    }

    onDisableRequested() {
        this.#enabled = false
        this.render()
    }

    render() {
        this.clear()
        this.applyStyles(PendingOperation.styles)
        this.style.display = this.#enabled ? 'flex' : 'none';
        this.shadowRoot.appendChild(this.createSpinner())
    }

    createSpinner() {
        const c = document.createElement('div')
        c.classList.add('spinner')
        return c
    } 

}

customElements.define('dd-pending-operation', PendingOperation)