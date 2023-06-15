const AboutUs = {
  async render() {
    return `
    <div class="jumbotron">
    <div class="hero">
        <div class="hero__inner__aboutUs">
        <div class="side-left-hero">
            <img class="logo" src="./share2Care.png" alt="share2Care_logos">
            <h1 class="hero__title__aboutUs">Berikan Donasi Terbaikmu, dengan Pilihan Barang Sesuai Kebutuhan.!</h1>
        </div>
        <div class="side-right">
            <p class="hero__tagline__aboutUs"><strong>Share2Care</strong> kami adalah marketplace donasi sebagai solusi untuk memudahkan
             pengguna dalam melakukan donasi dengan cara yang terpercaya dan aman. Dengan adanya website ini, 
             diharapkan dapat memfasilitasi pengguna yang ingin berdonasi dalam memilih barang yang dibutuhkan oleh 
             pihak-pihak yang membutuhkan, dan memastikan bahwa donasi yang diberikan benar-benar bermanfaat.”</p></div>
        </div>
    </div>
  </div>
  <div class="ourMission">
    <div class="side-left">
      <p>Dengan cara ini, diharapkan nantinya anda dapat membantu
        orang-orang yang membutuhkan dan berpartisipasi dalam kegiatan sosial tanpa harus mengeluarkan biaya yang besar, mencari ataupun bertemu secara langsung dengan penerima bantuan. Website ini nantinya dapat memudahkan Anda untuk
        berdonasi dengan memilih berbagai barang yang tersedia secara online cepat, mudah, dan tanpa tenaga.</p>
    </div class="side-right">
      <div class="titleMission">
      <h1>Misi Kami</h1>
    </div>
  </div>
  <div class="our">
    <h2>Bersama Kami, Berbagi Kasih"</h2>
      <div class="container-profile">
        <div class="profile-card">
          <div class="profile-picture">
            <img src="./indra.png" alt="">
          </div>
          <div class="profile-info">
            <h3 class="profile-name">Indra Lutfi Anando</h3>
            <p class="profile-description">Informatika, STMIK El Rahma Yogyakarta</p>
            <div class="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>
        <div class="profile-card">
          <div class="profile-picture">
            <img src="./indra.png" alt="">
          </div>
          <div class="profile-info">
            <h3 class="profile-name">Mohammad Dawan Lutfi</h3>
            <p class="profile-description">Informatika, Universitas Nusa Mandiri</p>
            <div class="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>
        <div class="profile-card">
          <div class="profile-picture">
            <img src="./indra.png" alt="">
          </div>
          <div class="profile-info">
            <h3 class="profile-name">Nasywa Kamilah Marbun</h3>
            <p class="profile-description">Informatika, Politeknik Negeri Jakarta</p>
            <div class="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>
        <div class="profile-card">
          <div class="profile-picture">
            <img src="./indra.png" alt="">
          </div>
          <div class="profile-info">
            <h3 class="profile-name">Faridl Mukhlashin Akbarullah</h3>
            <p class="profile-description">Informatika, STMIK El Rahma Yogyakarta</p>
            <div class="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
            </div>
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

export default AboutUs;
