import DDComponent from "./DDComponent.mjs";

export default class Map extends DDComponent {
    static #containerId = 'dd-map' 
    static #tileLayer = {
        url: 'https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo4&zoom={z}&x={x}&y={y}',
        props: {
            attribution: '<a href="http://www.kartverket.no/">Kartverket</a>'
        }
    }
    static leaflet = {
        css: './Dependencies/leaflet/leaflet.css',
        js: './Dependencies/leaflet/leaflet.js'
    }

    constructor() {
        super()
    }

    connectedCallback() {
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
        container.style.height = '400px'
        container.style.width = '600px'
        return container
    }

    #createMap(container) {
		L.Icon.Default.imagePath = './Dependencies/leaflet/images/'
        const map = L.map(container).setView([60.14, 10.25], 11)
        L.tileLayer(
            Map.#tileLayer.url, 
            Map.#tileLayer.props).addTo(map)
        const marker = L.marker([59.91132, 10.7372501]).addTo(map)
        map.flyTo(marker.getLatLng(), 13)
    }
}

DDComponent.define(Map)