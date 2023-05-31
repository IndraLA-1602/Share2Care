import styleCommon from "./styleShadow/styleCommon.js";
import styleHeaderNav from "./styleShadow/styleHeaderNav.js";

class HeaderNav extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this._shadowRoot.innerHTML = `
    <style>
    ${styleCommon}
    ${styleHeaderNav}
    </style>
    <div class="headerup">
        <img class="logo" src="./image/Share2Care_logos.png" alt="" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Testimoni</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
          <div class="container-nav">
            <img src="./image/shopping-cart.png" alt="" />
            <img src="./image/avatar.png" alt="" />
          </div>
        </nav>
    </div>
    `;
  }
}

customElements.define("header-nav", HeaderNav);
