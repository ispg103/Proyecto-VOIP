export enum Attribute1 {
    "title" = "title",
    "image" = "image",
}

class Home extends HTMLElement {
    titles?: string;
    image?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute1, null> = {
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
    
    attributeChangedCallback(propName: Attribute1, oldValue: undefined, newValue: string){
        switch(propName){
        default:
        this[propName] = newValue;
        this.render();
        break;
        }
        this.render()
    }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/homes/home.css">
            
                <section class="big">
                <h2>${this.title}</h2>
                <img src="${this.image}">
                </section>
                `;
            }
        }
    }

    customElements.define("my-home", Home);
    export default Home;