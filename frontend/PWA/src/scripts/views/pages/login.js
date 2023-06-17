import InputComponent from '../../component/input';
import HttpSend from '../../component/utils/HttpSend';
import $ from 'jquery';
import toast from '../../component/utils/toast';
import redirect from '../../component/utils/redirect';

const Login = {
  async render() {
    return /*html */ `
    <div class="container__login">
        <h2>Form Login</h2>
        <form id="login">
        ${InputComponent({ label: 'email', name: 'email', type: 'email' })}
        ${InputComponent({
          label: 'password',
          name: 'password',
          type: 'password',
        })}
        <div class="form__group">
            <button type="submit">Login</button>
        </div>
        </form>
        <a href="#/register">Buat Akun</a>
    </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const $login = $('#login');

    // login form
    $login.on('submit', async (e) => {
      e.preventDefault();

      const $password = $('[name=password]').val();
      const $email = $('[name=email]').val();

      // send register
      HttpSend({
        path: '/user/login',
        method: 'POST',
        data: {
          password: $password,
          email: $email,
        },
      })
        .then((res) => {
          if (res) localStorage.setItem('token', res?.token);

          redirect('/');

          window.location.reload();
        })
        .catch((err) => {
          toast('Username dan password salah', 'error');
        });
    });
  },
};

export default Login;
