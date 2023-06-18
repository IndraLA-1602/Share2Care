import CONFIG from "../../../globals/config";
import redirect from "../../component/utils/redirect";
import $ from "jquery";

const Profile = {
  async render() {
    return `
    <div class="Profile">
      <div class="Profile_padding">
        <div class="Profile_grid">
          <div class="Profile_img">
            <img src="./public/user.png" alt="" style="width:30%">
          </div>
          <div class="Profile_detail">
            <form>
              <label for="nama_user">Nama</label><br>
              <input type="text" id="nama_user" name="nama_user" value="" placeholder="John Doe"><br>
              <label for="email_user">E-mail</label><br>
              <input type="text" id="email_user" name="email_user" value="" placeholder="johndoe@gmail.com"><br>
            </form>
          </div>
        </div>
      </div>
    </div>
        `;
  },

  async afterRender() {
    const token = localStorage.getItem("token");
    if (token) {
      const user = await fetch(CONFIG.BASE_URL + "user/detail", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = await user.json();
      $('input[name="nama_user"]').val(`${data.name}`);
      $('input[name="email_user"]').val(`${data.email}`);
    } else {
      redirect("/login");
    }
  },
};

export default Profile;
