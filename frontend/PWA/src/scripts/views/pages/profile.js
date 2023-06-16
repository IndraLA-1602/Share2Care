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
              <input type="text" id="nama_user" name="nama_user" placeholder="John Doe"><br>
              <label for="email_user">E-mail</label><br>
              <input type="text" id="email_user" name="email_user" placeholder="johndoe@gmail.com"><br>
              <label for="telepon_user">Nomor Telepon</label><br>
              <input type="text" id="telepon_user" name="telepon_user" placeholder="081231231231"><br>
              <label for="lahir_user">Tanggal Lahir</label><br>
              <input type="date" id="lahir_user" name="lahir_user"><br>
              <p>Jenis Kelamin</p>
              <div class="radio_jenisKelamin">
                <label class="Jenis_kelamin">
                  <input type="radio" name="perempuan" />
                  Perempuan
                </label>
            
                <label class="Jenis_kelamin">
                  <input type="radio" name="lakilaki" />
                    Laki-Laki
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Profile;
