import { LitElement, html, css } from "lit-element";
import "@polymer/paper-input/paper-input";
import "@polymer/paper-button/paper-button";

class LoginForm extends LitElement {
  static get properties() {
    return {};
  }
  constructor() {
    super();
    this.userData = {
      username: null,
      password: null
    };
  }
  static get styles() {
    return css`
      .login-form {
        width: 40%;
        margin: 0 auto;
        padding: 20px;
        box-shadow: 0 3px 5px grey;
      }
      .wrapper {
        padding: 20px;
      }
      paper-button {
        background-color: green;
        color: white;
      }
    `;
  }
  handleChange(e) {
    this.userData = {
      ...this.userData,
      [e.target.name]: e.target.value
    };

    console.log(this.userData);
  }
  handleSubmit() {
    console.log(this.userData);
  }
  render() {
    return html`
      <div class="login-form">
        <div class="wrapper">
          <h1>Login form</h1>
          <paper-input
            label="Username"
            name="username"
            @input=${this.handleChange.bind(this)}
          ></paper-input>
          <paper-input
            label="Password"
            name="password"
            @input=${this.handleChange.bind(this)}
            type="password"
          ></paper-input>
          <paper-button name="loginBtn" @click=${this.handleSubmit}
            >Login</paper-button
          >
        </div>
      </div>
    `;
  }
}
window.customElements.define("login-form", LoginForm);
