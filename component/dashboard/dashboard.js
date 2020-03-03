import { LitElement, html, css } from "lit-element";
import "@polymer/paper-button/paper-button";
import "@vaadin/vaadin-upload";
class Dashboard extends LitElement {
  static get properties() {
    return {
      isDataLoaded: { type: Boolean },
      isPlaying: {type:Boolean}
    };
  }
  static get styles(){
    return css `
      paper-button{
        background-color:green;
        color:white;
      }
    `
  }
  constructor() {
    super();
    this.data = null;
    this.isDataLoaded = false;
    this.getData = this.getData.bind(this);
  }
  
  connectedCallback() {
    super.connectedCallback();
    fetch("http://localhost:8000/api/download/", {
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
      <vaadin-upload
        method="POST"
        form-data-name="file"
        headers='{"X-Foo": "Bar"}'
        accept="audio/mp3"
        target="http://localhost:8000/api/upload/music"
      ></vaadin-upload>
      <paper-button @click="${this.getData}">Play</paper-button>
    `;
  }
}
window.customElements.define("dashboard-tag", Dashboard);
