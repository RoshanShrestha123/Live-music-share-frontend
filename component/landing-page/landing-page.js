import { LitElement, html, css } from "lit-element";
import '../dashboard/dashboard';

class LandingPage extends LitElement {
  constructor() {
    super();
  }
  render() {
    return html`
      <h1>welcome to live music share</h1>
      <dashboard-tag></dashboard-tag>
    `;
  }
}
window.customElements.define("landing-page", LandingPage);
