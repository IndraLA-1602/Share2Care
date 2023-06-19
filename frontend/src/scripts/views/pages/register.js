import InputComponent from "../../component/input";
import $ from "jquery";
import Noty from "noty";
import HttpSend from "../../component/utils/HttpSend";
import redirect from "../../component/utils/redirect";
const Register = {
  async render() {
    return /* html */ `
      <div class="container__login">
        <h2>Form Register</h2>
        <form id="regsiter">
          ${InputComponent({ label: "username", name: "username" })}
          ${InputComponent({ label: "email", name: "email", type: "email" })}
          ${InputComponent({
            label: "password",
            name: "password",
            type: "password",
          })}
          <div class="form__group">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    `;
  },

  async afterRender() {
    const $register = $("#regsiter");

    // register form
    $register.on("submit", (e) => {
      e.preventDefault();

      const $username = $("[name=username]").val();
      const $password = $("[name=password]").val();
      const $email = $("[name=email]").val();

      // send register
      HttpSend({
        path: "/user/register",
        method: "POST",
        data: {
          name: $username,
          password: $password,
          email: $email,
        },
      }).then(() => {
        redirect("/login");
      });
    });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Register;
