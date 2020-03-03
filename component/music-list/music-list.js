import { LitElement, html, css } from "lit-element";
import "./music-card";

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
    this.data = {};
  }

  render() {
    return html`
      <div class="music-card-container">
        ${this.data.map(music => {
          return html`
            <music-card .name=${music.name}></music-card>
          `;
        })}
      </div>
    `;
  }
}

window.customElements.define("music-list", MusicList);
