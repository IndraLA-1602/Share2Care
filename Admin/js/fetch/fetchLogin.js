class Login {
  static async loginAdmin(username, password) {
    // const log = await axios
    //   .post("http://127.0.0.1:8000/api/admin/login", {
    //     username,
    //     password,
    //   })
    //   .catch((er) => console.log(er));
    // if (log.data.status == "Failed") {
    //   alert(`Login Gagal`);
    // }
    const response = await fetch("http://127.0.0.1:8000/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    console.log(response);
    // if (!response.ok) {
    //   console.log("Login Gagal");
    //   return;
    // }
    // const log = await response.json();
    // if (log.status === "Failed") {
    //   console.log("Login Gagal");
    // }
    // const token = log.data.data.token || null;
    // if (token) {
    //   localStorage.setItem("token", token);
    // }
    // window.location.href = "/";
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
    const tokenC = localStorage.getItem("token");

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
