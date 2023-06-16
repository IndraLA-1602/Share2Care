import Login from "../fetch/fetchLogin.js";

document.addEventListener("DOMContentLoaded", () => {
  const logIn = document.querySelector("#logIn");
  const email = document.querySelector("#inputEmail");
  const password = document.querySelector("#inputPassword");

  logIn.addEventListener("click", async () => {
    await Login.loginAdmin(email.value, password.value);
  });
});
