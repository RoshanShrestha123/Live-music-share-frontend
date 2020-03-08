import {LitElement,html,css} from 'lit-element';
import '@polymer/paper-card/paper-card'


class MusicCard extends LitElement{
  static get properties(){
    return {
      name:{type:String},
      id:{type:Number},
      onCardClick : {type:Function}
    }
  }
  static get styles(){
    return css `
      paper-card{
        width:250px;
        cursor:pointer;
        margin:5px;
      }
      .image-holder{
        padding:10px;
        height:250px;

        
      }
      .detail-holder{
        height:50px;
        padding:10px;
        background-color:white;
        line-height:16px;
        overflow:hidden;
        text-align:center;
      }
      img{
        width:100%;
        height:100%;
        object-fit:cover;
      }
      
      .music-name{
        font-size:14px;
      }
    `;
  }

  constructor(){
    super();
    this.name = ''
    this.id = 0
    
  }

  

  render(){
    return html `
      <paper-card @click=${()=> {this.onCardClick(this.id)}}>
      <div class="image-holder">
        <img src="../../mock/images/prateek3.jpeg"/>
      </div>
      <div class="detail-holder">
        <span class="music-name">${this.name} ${this.id}</span>
      </div>
      </paper-card>
    `;
  }
}
window.customElements.define('music-card',MusicCard);