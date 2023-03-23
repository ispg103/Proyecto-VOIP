class Header extends HTMLElement {
    
    static get observedAttributes() {
        return [];
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback() {            
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/header/header.css">
                <section class="bar">
                <img src="./app/images/voip.png" class="image">
                <button>
                <img src="./app/images/search.png" class="searchImg">
                </button>

                <a href="" class="logout">Log out</a>
                
                <section class="icons">
                <img src="./app/images/plus.png" class="plus">
                <img src="./app/images/like.png" class="like">
                <img src="./app/images/message.png" class="message">
                <img src="./app/images/profile.png" class="profile">
                </section>

                </section>
                `;
            }
        }
    }

    customElements.define("my-header", Header);
    export default Header;