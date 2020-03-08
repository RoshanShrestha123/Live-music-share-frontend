import { LitElement, html, css } from "lit-element";
import {Router} from '@vaadin/router';
import "@polymer/paper-button/paper-button";
import "@vaadin/vaadin-upload";
class Dashboard extends LitElement {
  static get properties() {
    return {
      isDataLoaded: { type: Boolean },
      isPlaying: { type: Boolean }
    };
  }
  static get styles() {
    return css`
      paper-button {
        background-color: green;
        color: white;
      }
    `;
  }
  constructor() {
    super();
    this.data = null;
    this.isDataLoaded = false;
    this.getData = this.getData.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    const musicId = this.location.params.id;
    console.log(musicId)
    fetch("http://localhost:8000/api/download/"+musicId, {
      "Content-Type": "audio/mp3"
    })
      .then(response => response.arrayBuffer())
      .then(data => {
        this.data = data;
        this.isDataLoaded = true;
      });
  }

  getData() {
    const audioCtx = new AudioContext();
    const source = audioCtx.createBufferSource();
    audioCtx.decodeAudioData(this.data, function(decodedData) {
      source.buffer = decodedData;
      source.connect(audioCtx.destination);
      source.start();
    });
  }
  render() {
    return html`
      
      <paper-button @click="${this.getData}">Play</paper-button>
    `;
  }
}
window.customElements.define("music-player", Dashboard);
