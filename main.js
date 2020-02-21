import { LitElement, html } from "lit-element";
import "./component/login-form/login-form.js";
import "./component/signup-form/signup-form";
class Main extends LitElement {
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return html`
      <signup-form></signup-form>
    `;
  }
}
window.customElements.define("main-tag", Main);
