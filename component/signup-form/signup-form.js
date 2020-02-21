import { LitElement, html, css } from "lit-element";
import "@polymer/paper-input/paper-input";
import "@polymer/paper-button/paper-button";

class SignupForm extends LitElement {
  static get properties() {
    return {};
  }
  constructor() {
    super();
    this.userData = {
      fullName: null,
      email: null,
      password: null
    };
  }
  static get styles() {
    return css`
      .signup-form {
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
      <div class="signup-form">
        <div class="wrapper">
          <h1>Sign up form</h1>
          <form method="POST">
            <paper-input
              label="Full Name"
              name="fullName"
              @input=${this.handleChange.bind(this)}
            ></paper-input>
            <paper-input
              label="Email"
              name="email"
              @input=${this.handleChange.bind(this)}
              type="email"
            ></paper-input>
            <paper-input
              label="Password"
              name="password"
              @input=${this.handleChange.bind(this)}
              type="password"
            ></paper-input>
            <paper-button name="signupBtn" @click=${this.handleSubmit}
              >signup</paper-button
            >
          </form>
        </div>
      </div>
    `;
  }
}
window.customElements.define("signup-form", SignupForm);
