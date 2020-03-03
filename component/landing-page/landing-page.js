import { LitElement, html, css } from "lit-element";
import '../dashboard/dashboard';
import '../music-list/music-list-wrapper';

class LandingPage extends LitElement {
  constructor() {
    super();
  }
  static get styles(){
      return css `
      *{
        font-family:Roboto;
      }
        .title{
            text-align:center;
        }
      `;
  }
  
  render() {
    return html`
    <div>
      <h1 class="title">Music Share for Sunena</h1>
      <music-list-wrapper></music-list-wrapper>
    </div>

    `;
  }
}
window.customElements.define("landing-page", LandingPage);
