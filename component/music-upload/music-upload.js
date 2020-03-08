import { LitElement, html, css } from "lit-element";

import "@vaadin/router";
import "@polymer/paper-card/paper-card";
import "@polymer/paper-input/paper-input";
import "@polymer/paper-button/paper-button";
/**
 * `music-upload` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class MusicUpload extends LitElement {
  static get properties() {
    return {};
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }

  static get styles() {
    return css`
      .wrapper {
        width: 50%;
        margin: 0 auto;
        padding:10px;
      }
    `;
  }

  /**
   * Implement to describe the element's DOM using lit-html.
   * Use the element current props to return a lit-html template result
   * to render into the element.
   */
  render() {
    return html`
      <div class="wrapper">
          <vaadin-upload
            method="POST"
            form-data-name="file"
            headers='{"X-Foo": "Bar"}'
            accept="audio/mp3"
            target="http://localhost:8000/api/upload/music"
          ></vaadin-upload>
          <paper-button>Save</paper-button>
      </div>
    `;
  }
}

customElements.define("music-upload", MusicUpload);
