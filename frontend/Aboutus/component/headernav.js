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
        <div><button class="togling">&#9776;</button>
        <img class="logo" src="./image/Share2Care_logos.png" alt="" /></div>
        <nav>
          <ul>
            <li><a class="menu" href="#">Home</a></li>
            <li><a class="menu" href="#">Product</a></li>
            <li><a class="menu" href="#">Testimoni</a></li>
            <li><a class="menu" href="#">About Us</a></li>
          </ul>
          <div class="container-nav">
            <img src="./image/shopping-cart.png" alt="" />
            <div class="dropdown">
            <img id="profile" src="./image/avatar.png" alt="" />
              <ul id="drop">
                <li><a href="#">Profile</a></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
    `;
    const profile = this._shadowRoot.querySelector("#profile");
    const drop = this._shadowRoot.querySelector("#drop");

    profile.addEventListener("click", () => {
      drop.classList.toggle("show");
    });
  }
}

customElements.define("header-nav", HeaderNav);
