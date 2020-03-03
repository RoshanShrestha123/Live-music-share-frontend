import {LitElement,html,css} from 'lit-element';
import '@polymer/paper-card/paper-card'


class MusicCard extends LitElement{
  static get properties(){
    return {
      name:{type:String}
    }
  }
  static get styles(){
    return css `
      paper-card{
        width:150px;
        height:150px;
        cursor:pointer;
        margin:5px;
        text-align:center;
      }
    `;
  }

  constructor(){
    super();
  }

  render(){
    return html `
      <paper-card>
        <span>${this.name}</span>
      </paper-card>
    `;
  }
}
window.customElements.define('music-card',MusicCard);