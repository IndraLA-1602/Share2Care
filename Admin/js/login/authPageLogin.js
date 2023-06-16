import Token from "../utils/searchToken.js";

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  if (token) {
    window.location.href = "index.html";
  }
});
