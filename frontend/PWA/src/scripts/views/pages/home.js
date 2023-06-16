const Home = {
  async render() {
    return `
    <div class="jumbotron">
    <div class="hero">
        <div class="hero__inner">
            <h1 class="hero__title">Share2Care: <br>
                Berbagi Kasih, Menebar Kebaikan!</h1>
            <p class="hero__tagline">Mari berbagi kebaikan dan menciptakan <br>
                perubahan positif bersama-sama!”</p>
            <a class="hero__button" href="#">Donasikan</a>
        </div>
    </div>
  </div>

  <div class="tagline"> 
    <h3 class="tagline-campaign">Berbagi Kasih, Menebar Kebaikan bersama Share2Care!</h3>
    <h2 class="subtagline-campaign">Bergabunglah sekarang dan berikan kontribusi 
                melalui donasi online yang mudah dan bermanfaat</h2>
  </div>

 </div>
    <div class="fitur">
      <h1>Fitur Unggulan</h1>
      <div class="Fitur_list">
        <div class="Card_Fitur">
          <div class="Card_img">
            <img src="./public/fitur.png" alt="" style="width:15%">
          </div>
          <div class="Text_Fitur">
            <h2>Ulasan dan Testimoni</h2>
            <p>Testimoni tentang pengalaman mereka dalam menggunakan platform donasi, sehingga dapat memberikan keyakinan kepada pengguna lainnya</p>
          </div>
        </div>
        <div class="Card_Fitur">
          <div class="Card_img">
            <img src="./public/fitur.png" alt="" style="width:15%">
          </div>
          <div class="Text_Fitur">
            <h2>Fitur Unggulan 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="Card_Fitur">
          <div class="Card_img">
            <img src="./public/fitur.png" alt="" style="width:15%">
          </div>
          <div class="Text_Fitur">
            <h2>Fitur Unggulan 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="donasi">
      <p>Produk Donasi Kami</p>
      <h1>Donasi Online Mudah dan Bermanfaat di Share2Care</h1>
      <div class="Donasi_list">
        
      </div>
    </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
