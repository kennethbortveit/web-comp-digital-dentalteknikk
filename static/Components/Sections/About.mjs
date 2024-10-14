import DDComponent from "../DDComponent.mjs";
import SubSection from "./SubSection.mjs";

export default class About extends DDComponent {
    constructor() {
        super()
        this.stylesheetUrl = './Components/Sections/About.css'
    }

    connectedCallback() {
		this.appendExternalStyleSheet()
        const container = this.#createContainer()
        container.setAttribute('class', 'about-container')
        const history = this.#createHistory()
        container.appendChild(history)
        const purpose = this.#createPurpose()
        container.appendChild(purpose)
        const qualityInsurance = this.#createQualityInsurance()
        container.appendChild(qualityInsurance)
        this.shadowRoot.appendChild(container)
    }

    #createHistory() {
        const subSection = this.#createSubSection('Historikk')
        const content = document.createElement('div')
        content.setAttribute('slot', 'content')
        const paragraphs = [
            'Drøbak Dentalteknikk ble startet av Morten Iversen i 1988.',
            'Import siden 2008.',
            'Firmaet ble etablert i Drøbak, men flyttet til Oslo i 2012.',
            'I 2016 byttet vi navn til Digital Dentalteknikk AS.',
            'Alle ansatter autoriserte tannteknikere.'
        ]
        paragraphs.forEach(paragraph => {
            const p = document.createElement('p')
            const textNode = document.createTextNode(paragraph)
            p.appendChild(textNode)
            content.appendChild(p)
        })
        subSection.appendChild(content)
        return subSection
    }

    #createPurpose() {
        const subSection = this.#createSubSection('Formål')
        const content = document.createElement('div')
        content.setAttribute('slot', 'content')
        const paragraphs = [
            'Digital Dentalteknikk skal produsere og videreformidle arbeider av høy kvalitet.',
            'Vi skal tilby de beste løsningene innen materialvalg, presisjon og estetikk.',
            'Vi garanterer vår kvalitet med følgende garanti på våre arbeider:'
        ]
        paragraphs.forEach(paragraph => {
            const p = document.createElement('p')
            const textNode = document.createTextNode(paragraph)
            p.appendChild(textNode)
            content.appendChild(p)
        })
        const listOfGuaranties = document.createElement('ul')
        const guaranties = [
                'Fast protetikk 5 år',
                'Avtagbar protetikk 3 år'
            ]
        guaranties.forEach(guaranty => {
            const item = document.createElement('li')
            const textNode = document.createTextNode(guaranty)
            item.appendChild(textNode)
            listOfGuaranties.appendChild(item)
        })
        content.appendChild(listOfGuaranties)
        subSection.appendChild(content)
        return subSection
    }

    #createQualityInsurance() {
        const subSection = this.#createSubSection('Kvalitetssikring')
        const content = document.createElement('div')
        content.setAttribute('slot', 'content')
        const paragraphs = [
            'Digital Dentalteknikk har høyt fokus på kvalitetssikring og all produkjson tilfredstiller kravene i direktiv 93/42 EØF om medisinsk utstyr. Alle materialene som inngår i vår produksjon, er CE-merket.',
            'Med hvert arbeid følger, i tillegg til nota, en samsvarserklæring som forteller hvilke materialer som er benyttet, hvilke tenner det gjelder, behandlende tannleges navn og pasientens identitet.'
        ]
        paragraphs.forEach(paragraph => {
            const p = document.createElement('p')
            const textNode = document.createTextNode(paragraph)
            p.appendChild(textNode)
            content.appendChild(p)
        })
        subSection.appendChild(content)
        return subSection
    }

    #createSubSection(name) {
        const subSection = document.createElement(
            DDComponent.getComponentName(SubSection)
        )
        subSection.setAttribute('name', name)
        return subSection
    }

    #createContainer() {
        const container = document.createElement('div')
        return container
    }
}

DDComponent.define(About)