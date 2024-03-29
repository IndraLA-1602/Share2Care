import styleCommon from "./styleShadow/styleCommon.js";
import styleHeaderNav from "./styleShadow/styleHeaderNav.js";
import DrawerInitiator from "../utils/drawer-initiator.js";
import redirect from "./utils/redirect.js";

class HeaderNav extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({
      mode: "open",
    });
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute(
      "href",
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    );
    this._shadowRoot.appendChild(link);
  }

  set mainContent(mainContent) {
    this._content = mainContent;
    this.render();
  }

  connectedCallback() {}
  render() {
    this._shadowRoot.innerHTML += /*html */ `
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    />
    <style>
    ${styleCommon}
    ${styleHeaderNav}
    </style>
    <div class="headerup">
        <div><button id="hamburgerButton">&#9776;</button>
        <img class="logo" src="./share2Care.png" alt="" /></div>
        <nav id="navigationDrawer">
          <ul>
            <li><a class="menu" href="#/home">Home</a></li>
            <li><a class="menu" href="#/product">Product</a></li>
            <li><a class="menu" href="#/testimoni">Testimoni</a></li>
            <li><a class="menu" href="#/about-us">About Us</a></li>
          </ul>
          <div class="container-nav">
            <a href="#/cart">
              <i class="button-icon fas fa-shopping-cart"></i>
            </a>
            <a href="#/login" id="login-btn">Login</a>
          </div>
        </nav>
    </div>
    `;

    // condition locastorage
    const loginBtn = this._shadowRoot.querySelector("#login-btn");

    if (localStorage.getItem("token")) {
      const dropdown = document.createElement("span");
      dropdown.innerHTML = /*html */ `<i id="profile" class="button-icon fas fa-user"></i>
      <div class="dropdown">
      <ul id="drop" class="hidden hide">
        <li><a href="#/profile">Profile</a></li>
        <li><a href="#" id="logout">Logout</a></li>
      </ul>
    </div>`;

      const logout = () => {
        localStorage.clear();

        redirect("/");

        window.location.reload();
      };

      loginBtn.replaceWith(dropdown);

      const profile = this._shadowRoot.querySelector("#profile");
      const drop = this._shadowRoot.querySelector("#drop");
      const logoutBtn = this._shadowRoot.querySelector("#logout");

      logoutBtn.addEventListener("click", logout);

      const setDisplayNone = () => {
        drop.classList.toggle("hide");
      };

      profile.addEventListener("click", () => {
        drop.classList.toggle("hidden");
        setTimeout(setDisplayNone, 300);
      });
    }

    const logo = this._shadowRoot.querySelector(".logo");

    this._button = this._shadowRoot.querySelector("#hamburgerButton");
    this._drawer = this._shadowRoot.querySelector("#navigationDrawer");

    logo.addEventListener("click", () => {
      window.location.href = "#/home";
    });

    // this._content.addEventListener("click", () => {
    // drop.classList.add("hidden");
    // });

    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }
}

customElements.define("header-nav", HeaderNav);
