import Token from "../utils/searchToken.js";

class Login {
  static async loginAdmin(username, password) {
    const log = await axios
      .post("http://127.0.0.1:8000/api/admin/login", {
        username,
        password,
      })
      .catch((er) => console.log(er));
    if (log.data.status == "Failed") {
      alert(`Login Gagal`);
    }

    const token = log.data.data.token;

    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 9 * 60 * 60 * 1000); // 9 jam

    document.cookie = `token=${token}; expires=${expirationDate.toUTCString()}; path=/`;

    window.location.href = "/";
  }

  static async registerAdmin(name, email, pass) {
    const regist = await axios
      .post("http://127.0.0.1:8000/api/admin/register", {
        username: name,
        email: email,
        password: pass,
      })
      .catch((error) => {
        console.log(error);
      });

    if (regist.data.status == "success") {
      alert("akun berhasil dibuat");
      window.location.href = "login.html";
    }
  }

  static async logout() {
    const tokenC = Token.searchToken();

    const config = {
      headers: {
        Authorization: `Bearer ${tokenC}`,
      },
    };

    // Mengirim permintaan HTTP dengan menggunakan Axios dan header "Bearer"
    await axios
      .post("http://127.0.0.1:8000/api/admin/logout", {}, config)
      .then((response) => {
        // Menghandle respons
        console.log(response.data);
        if (response.data.status == "Success") {
          document.cookie = `token=${tokenC}; expires=Thu, 15 Jun 1999 12:00:00 UTC; path=/`;
        }
      })
      .catch((error) => {
        // Menghandle error
        console.error(error);
        return;
      });
  }
}

export default Login;
