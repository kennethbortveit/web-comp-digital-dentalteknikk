import DDComponent from "./DDComponent.mjs";

export default class Map extends DDComponent {
    static #containerId = 'dd-map' 
    static #tileLayer = {
        url: 'https://cache.kartverket.no/v1/wmts/1.0.0/topo/default/webmercator/{z}/{y}/{x}.png',
        props: {
            attribution: '&copy; <a href="http://www.kartverket.no/">Kartverket</a>'
        }
    }
    static leaflet = {
        css: './static/Dependencies/leaflet/leaflet.css',
        js: './static/Dependencies/leaflet/leaflet.js'
    }
    
    constructor() {
        super()
        this.stylesheetUrl = './static/Components/Map.css'
    }

    connectedCallback() {
		this.appendExternalStyleSheet()
        const mapStyles = this.#createMapStylesLink()
        this.shadowRoot.appendChild(mapStyles)
        const container = this.#createContainer()
        this.shadowRoot.appendChild(container)
        const script = this.#createMapScript(container)
        this.shadowRoot.appendChild(script)
    }

    #createMapStylesLink() {
        const link = document.createElement('link')
        link.setAttribute('rel', 'stylesheet')
        link.setAttribute('href', Map.leaflet.css)
        return link
    }

    #createMapScript(container) {
        const script = document.createElement('script')
        script.setAttribute('src', Map.leaflet.js)
        script.onload = () => this.#createMap(container)
        return script
    }

    #createContainer() {
        const container = document.createElement('div')
        container.setAttribute('id', Map.#containerId)
        return container
    }

    #createMap(container) {
		L.Icon.Default.imagePath = './static/Dependencies/leaflet/images/'
        const map = L.map(container).setView([60.14, 10.25], 11)
        L.tileLayer(
            Map.#tileLayer.url, 
            Map.#tileLayer.props).addTo(map)
        const marker = L.marker([59.91132, 10.7372501]).addTo(map)
        map.flyTo(marker.getLatLng(), 13)
    }
}

DDComponent.define(Map)
