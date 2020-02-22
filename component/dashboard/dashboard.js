import { LitElement, html, css } from "lit-element";
import "@vaadin/vaadin-upload";
class Dashboard extends LitElement {
  constructor() {
    super();
  }
  render() {
    return html`
      <vaadin-upload
        method="POST"
        form-data-name="file"
        headers='{"X-Foo": "Bar"}'
        accept="audio/mp3"
        target="http://localhost:8000/api/upload/music"
      ></vaadin-upload>
    `;
  }
}
window.customElements.define("dashboard-tag", Dashboard);
