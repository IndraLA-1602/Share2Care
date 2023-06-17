import "regenerator-runtime";
import "./component/headernav.js";
import "./component/footerapp.js";
import "../styles/styles.css";
import "../styles/cart.css";
import "../styles/profile.css";
import "../styles/aboutUs.css";
import "../styles/login.css";
import "../styles/product.css";
import "../styles/responsive.css";
import App from "./views/app";

const headerUp = document.querySelector("header-nav");

headerUp.mainContent = document.querySelector("#mainContent");

// eslint-disable-next-line no-unused-vars
const app = new App({
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
