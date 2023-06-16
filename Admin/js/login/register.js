import Login from "../fetch/fetchLogin.js";

document.addEventListener("DOMContentLoaded", () => {
  const inputPassword = document.querySelector("#inputPassword");
  const inputPasswordRepeat = document.querySelector("#inputPasswordRepeat");
  const beda = document.querySelector("#p");

  const username = document.querySelector("#username");
  const email = document.querySelector("#inputEmail");

  const register = document.querySelector("#regs");

  register.addEventListener("click", () => {
    if (username.value.trim() === "") {
      alert("Username harus diisi!");
      return;
    }

    if (email.value.trim() === "") {
      alert("Email harus diisi!");
      return;
    }

    if (inputPassword.value.trim() === "") {
      alert("Password harus diisi!");
      return;
    }

    if (inputPassword.value.length < 6) {
      alert("Password harus memiliki setidaknya 6 karakter!");
      return;
    }

    if (inputPasswordRepeat.value === inputPassword.value) {
      console.log("sama");
      inputPasswordRepeat.classList.remove("pss");
      beda.classList.remove("psst");
    } else {
      inputPasswordRepeat.classList.add("pss");
      beda.classList.add("psst");
      return;
    }

    Login.registerAdmin(username.value, email.value, inputPassword.value);
  });
});
