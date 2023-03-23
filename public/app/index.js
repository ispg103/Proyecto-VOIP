import * as components from './components/index.js'
import homedata from './datas/homedata.js';
import { Attribute1 } from "./components/homes/homes.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.home = [];
        this.attachShadow({ mode: 'open' });
        homedata.forEach((card) => {
            const homeCard = this.ownerDocument.createElement('my-home');
            homeCard.setAttribute(Attribute1.title, card.title);
            homeCard.setAttribute(Attribute1.image, card.image);
            this.home.push(homeCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
        }
        this.home.forEach((card) => {
            var _a;
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(card);
        });
    }
}
customElements.define("app-container", AppContainer);
