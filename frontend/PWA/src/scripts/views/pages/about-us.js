const AboutUs = {
  async render() {
    return `
    <header>
    <div class="jumbotron_aboutus">
      <div class="jumbotron-logo">
        <img class="logo" src="./image/Share2Care_logos.png" alt="" />
      </div>
      <div class="judul">
        <h1>
          Berikan Donasi Terbaikmu, dengan Pilihan Barang Sesuai Kebutuhan.!
        </h1>
      </div>
      <div class="desc">
        <p>
        <b>Share2Care</b> kami adalah marketplace donasi sebagai solusi
        untuk memudahkan pengguna dalam melakukan donasi dengan cara yang
        terpercaya dan aman. Dengan adanya website ini, diharapkan dapat
        memfasilitasi pengguna yang ingin berdonasi dalam memilih barang
        yang dibutuhkan oleh pihak-pihak yang membutuhkan, dan memastikan
        bahwa donasi yang diberikan benar-benar bermanfaat.
        </p>
      </div>
    </div>
    <header>
    <section class="misi">
      <h2>Misi Kami</h2>
      <p>
        Dengan cara ini, diharapkan nantinya anda dapat membantu orang-orang
        yang membutuhkan dan berpartisipasi dalam kegiatan sosial tanpa harus
        mengeluarkan biaya yang besar, mencari ataupun bertemu secara langsung
        dengan penerima bantuan. Website ini nantinya dapat memudahkan Anda
        untuk berdonasi dengan memilih berbagai barang yang tersedia secara
        online cepat, mudah, dan tanpa tenaga.
      </p>
    </section>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default AboutUs;
