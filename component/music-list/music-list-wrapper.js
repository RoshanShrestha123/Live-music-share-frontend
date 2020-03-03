import {LitElement,html,css} from 'lit-element';
import './music-list'

class MusicWrapper extends LitElement{
 
  static get properties(){
    return {
      data: {type:Array},
      isDataLoaded : {type: Boolean}
    }
  }

  static get styles(){
    return css `
      .wrapper{
        width:80%;
        margin:0 auto;
      }
    `;
  }
  constructor(){
    super();
    this.data = [];
    this.isDataLoaded = false;
    this.fetchMusicList = this.fetchMusicList.bind(this);
  }

  connectedCallback(){
    super.connectedCallback();
    this.fetchMusicList();
  }

  fetchMusicList(){
    const URL = 'http://localhost:8000/api/music/showAll';
    fetch(URL,{
      method:'GET',
      headers:{'Content-Type':'application/json','Accept':'application/json'}
    })
    .then(response => {
      if(!response.ok) throw response;
      return response.json();
    })
    .then(data => {
      this.data = data.result;
      this.isDataLoaded = true;
    })
    .catch(error=>{
      console.log(error)
    })
  }

  render(){
    console.log(this.isDataLoaded)
    return html `
    <div class="wrapper">
     ${this.isDataLoaded ? html `<music-list .data =${this.data}></music-list>` : html`<h1>Loading</h1>`}
    </div>
    `;
  }
}

window.customElements.define('music-list-wrapper',MusicWrapper);