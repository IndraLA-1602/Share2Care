import Token from "../utils/searchToken.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log(Token.searchToken());
  if (!Token.searchToken()) {
    window.location.href = "login.html";
  }
});
