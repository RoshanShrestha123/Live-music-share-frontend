import { LitElement, html, css } from "lit-element";
import {Router} from '@vaadin/router';
import "../music-player/music-player";
import "../music-list/music-list-wrapper";
import "@polymer/paper-button";

import '../nav-bar/nav-bar'

class LandingPage extends LitElement {
  constructor() {
    super();
  }
  static get styles() {
    return css`
      * {
        font-family: Roboto;
        margin:0;
        padding:0;
      }
      .title {
        text-align: center;
      }
      paper-button {
        background-color:green;
        color:white;
      }
    `;
  }
  

  render() {
    return html`
      <div>
      <nav-bar></nav-bar>
        <music-list-wrapper></music-list-wrapper>
      </div>
    `;
  }
}
window.customElements.define("landing-page", LandingPage);
