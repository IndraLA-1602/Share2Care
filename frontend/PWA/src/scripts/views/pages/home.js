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

  <div class="sponsor-campaign">
  <div class="sponsor-logo">
            <img src="./indra.png" alt="">
          </div>
  </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
