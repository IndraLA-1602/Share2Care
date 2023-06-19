import "regenerator-runtime";
import "./component/headernav.js";
import "./component/footerapp.js";
import "../styles/styles.css";
import "../styles/cart.css";
import "../styles/profile.css";
import "../styles/login.css";
import "../styles/product.css";
import "../styles/responsive.css";
import "../styles/testimoni.css";
import "../styles/productCard.css";
import "../../node_modules/noty/lib/noty.css";
import "../../node_modules/noty/lib/themes/metroui.css";
import App from "./views/app";

const headerUp = document.querySelector("header-nav");

headerUp.mainContent = document.querySelector("#mainContent");

// eslint-disable-next-line no-unused-vars
const app = new App({
  content: document.querySelector("#mainContent"),
});

function checkTeamCardVisibility() {
  const productCards = document.querySelectorAll(".product-cards");

  productCards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      card.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkTeamCardVisibility);
window.addEventListener("resize", checkTeamCardVisibility);

window.addEventListener("hashchange", () => {
  app.renderPage();
  checkTeamCardVisibility();
});

window.addEventListener("DOMContentLoaded", () => {
  app.renderPage();
  checkTeamCardVisibility();
});
