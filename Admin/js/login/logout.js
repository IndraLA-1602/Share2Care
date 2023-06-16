import Login from "../fetch/fetchLogin.js";

document.addEventListener("DOMContentLoaded", () => {
  const logout = document.querySelector("#logout");
  logout.addEventListener("click", async () => {
    try {
      await Login.logout();
      window.location.href = "login.html";
    } catch (e) {
      console.log(e);
    }
  });
});
