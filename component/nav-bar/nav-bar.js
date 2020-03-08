import { LitElement, html, css } from "lit-element";

/**
 * `nav-bar` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class NavBar extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      .nav-bar{
      
        background-color:black;
        color:white;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        align-items:center;
        padding:8px;
      }
      .nav ul li{
        display:inline-block;
        padding-left:8px;
      }
      a{
        color:white;
        text-decoration:none;
      }
    `;
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Implement to describe the element's DOM using lit-html.
   * Use the element current props to return a lit-html template result
   * to render into the element.
   */
  render() {
    return html`
      <div class="nav-bar">
        <div>WeTogether</div>
        <div class="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="upload">Upload</a></li>
            <li><a href="login">Login</a></li>
            <li><a href="signup">Signup</a></li>
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define("nav-bar", NavBar);
