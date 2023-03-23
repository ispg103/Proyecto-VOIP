export var Attribute1;
(function (Attribute1) {
    Attribute1["title"] = "title";
    Attribute1["image"] = "image";
})(Attribute1 || (Attribute1 = {}));
class Home extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            title: null,
            image: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                this.render();
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/home/home.css">
            
                <section class="all">
                <h2>${this.title}</h2>
                <img src="${this.image}">
                </section>
                `;
        }
    }
}
customElements.define("my-home", Home);
export default Home;
