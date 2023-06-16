console.log("halo");
import Login from "../fetch/fetchLogin.js";

document.addEventListener("DOMContentLoaded", () => {
  const logIn = document.querySelector("#logIn");
  const email = document.querySelector("#inputEmail");
  const password = document.querySelector("#inputPassword");

  logIn.addEventListener("click", async () => {
    console.log("data : " + email.value + password.value);
    await Login.loginAdmin(email.value, password.value);
  });
});
