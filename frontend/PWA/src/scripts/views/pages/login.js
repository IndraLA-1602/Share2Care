const Login = {
  async render() {
    return `
    <div class="container__login">
        <h2>Form Login</h2>
        <form>
        <div class="form__group">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required>
        </div>
        <div class="form__group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required>
        </div>
        <div class="form__group">
            <button type="submit">Login</button>
        </div>
        </form>
    </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Login;
