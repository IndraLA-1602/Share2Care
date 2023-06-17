const Register = {
  async render() {
    return `
    <div class="container__login">
        <h2>Form Register</h2>
        <form>
        <div class="form__group">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required>
        </div>
        <div class="form__group">
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" placeholder="Enter your email" required>
        </div>
        <div class="form__group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required>
        </div>
        <div class="form__group">
            <button type="submit">Register</button>
        </div>
        </form>
    </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Register;
