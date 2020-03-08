import { LitElement, html, css } from "lit-element";
import "./music-card";
import {Router} from '@vaadin/router'

class MusicList extends LitElement {
  static get properties() {
    return {
      data: { type: Object }
    };
  }

  static get styles(){
    return css `
      .music-card-container{
        display:flex;
        flex-wrap:wrap;
        flex-direction:row;
        justify-content:flex-start;

      }
    `;
  }

  constructor() {
    super();
    this.data = {}
    this.onCardClick = this.onCardClick.bind(this)
  }

  onCardClick(id){
    console.log('card click ',id)
    Router.go('http://localhost:8081/play-music/'+id)
    
  }

  render() {
    return html`
      <div class="music-card-container">
        ${this.data.map(music => {
          console.log(music)
          return html`
            <music-card .name=${music.name} .id=${music.id} .onCardClick = ${this.onCardClick}></music-card>
          `;
        })}
      </div>
    `;
  }
}

window.customElements.define("music-list", MusicList);
