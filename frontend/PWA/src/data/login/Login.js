import axios from "axios";

class Login {
  static async loginAdmin(email, password) {
    const log = await axios
      .post("http://127.0.0.1:8000/api/user/login", {
        email,
        password,
      })
      .catch((er) => console.log(er));
    if (log.data.status == "Failed") {
      alert(`Login Gagal`);
    }

    const token = log.data.data.token || null;
    if (token) {
      localStorage.setItem("token", token);
    }
  }

  static async registerAdmin(name, email, pass) {
    const regist = await axios
      .post("http://127.0.0.1:8000/api/user/register", {
        name: name,
        email: email,
        password: pass,
      })
      .catch((error) => {
        console.log(error);
      });

    if (regist.data.status == "success") {
      alert("akun berhasil dibuat");
    }
  }

  static async logout() {
    const tokenC = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${tokenC}`,
      },
    };

    // Mengirim permintaan HTTP dengan menggunakan Axios dan header "Bearer"
    await axios
      .post("http://127.0.0.1:8000/api/user/logout", {}, config)
      .then((response) => {
        // Menghandle respons
        console.log(response.data);
        if (response.data.status == "Success") {
          localStorage.removeItem("token");
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
