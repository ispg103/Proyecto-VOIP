import * as components from './components/index.js'
import homedata from './datas/homedata.js'

import Home, {Attribute1} from "./components/homes/homes.js"

class AppContainer extends HTMLElement{
    home: Home[] = []    

     constructor(){
        super()
        this.attachShadow({mode: 'open'})

        homedata.forEach((card)=>{
            const homeCard=this.ownerDocument.createElement('my-home') as Home
            homeCard.setAttribute(Attribute1.title, card.title)
            homeCard.setAttribute(Attribute1.image, card.image)
            this.home.push(homeCard);
         });
     }

    connectedCallback(){
       this.render();
    }


    render(){
      if(this.shadowRoot){
       this.shadowRoot.innerHTML=``
      }

      this.home.forEach((card) => {
         this.shadowRoot?.appendChild(card);
      });
   
    }

}

customElements.define("app-container", AppContainer);