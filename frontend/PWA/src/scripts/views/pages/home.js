import Campaign from "../../../data/campaignSource";
import $ from "jquery";
import Product from "../../../data/productsSource";
import {
  createCampaignList,
  createProductList,
} from "../templates/template-creator";
import Payment from "../../../data/paymentSource";

const Home = {
  async render() {
    return `
    <div class="notif hidden">Data berhasil ditambahkan</div>
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

    <div class="campaign">
      <p>Berbagi Kasih, Menebar Kebaikan Bersama Share2Care!</p>
      <h1>Bergabunglah sekarang dan berikan kontribusi melalui donasi online yang mudah dan bermanfaat</h1> 
      <div class="Campaign_List">
        
      </div>
    </div>

    </div>
    <div class="fitur">
      <h2>Fitur Unggulan</h2>
      <div class="Fitur_list">
        <div class="Card_Fitur">
          <div class="Card_img1">
          </div>
          <div class="Text_Fitur">
            <h3>Ulasan dan Testimoni</h3>
            <p>Testimoni tentang pengalaman mereka dalam menggunakan platform donasi, sehingga dapat memberikan keyakinan kepada pengguna lainnya</p>
          </div>
        </div>
        <div class="Card_Fitur">
          <div class="Card_img2">
          </div>
          <div class="Text_Fitur">
            <h3>Pilihan Barang Donasi</h3>
            <p>Memberikan pilihan yang beragam bagi pengguna untuk membeli barang-barang donasi yang akan didistribusikan kepada mereka yang membutuhkan</p>
          </div>
        </div>
        <div class="Card_Fitur">
          <div class="Card_img3">
          </div>
          <div class="Text_Fitur">
            <h3>Fitur Sosial</h3>
            <p>Memungkinkan pengguna untuk berbagi informasi dan kampanye donasi melalui media sosial, sehingga dapat meningkatkan jangkauan dan partisipasi donasi</p>
          </div>
        </div>
      </div>
    </div>

    <div class="donasi">
      <p>Produk Donasi Kami</p>
      <h1>Donasi Online Mudah dan Bermanfaat di Share2Care</h1>
      <div class="product-cards"></div>
    </div>

    <div class="tagline"> 
      <h3 class="tagline-campaign">Ulasan Pengguna Share2Care</h3>
      <h2 class="subtagline-campaign">Kisah Inspiratif Pengguna Share2Care 
      Mewarnai Dunia dengan Donasi dan Kebaikan</h2>
    </div>

    <div class="ulasan-container">
        <div class="ulasan-cards">

            <div class="quote-container">
              <div class="profile-icon">
                <img src="./avatar-grey.png">
              </div>
              <p class="quote-text">"Saya sangat terkesan dengan website marketplace donasi ini! Tampilannya menarik dan mudah digunakan</p>
            </div>
            <div class="quote-container">
              <div class="profile-icon">
                <img src="./avatar-grey.png">
              </div>
              <p class="quote-text">"Website marketplace donasi ini benar-benar luar biasa! Saya sangat senang bisa berkontribusi melalui donasi online yang mudah dan bermanfaat</p>
            </div>
            <div class="quote-container">
              <div class="profile-icon">
                <img src="./avatar-grey.png">
              </div>
              <p class="quote-text">"Website marketplace donasi ini adalah tempat yang luar biasa untuk menyalurkan bantuan.</p>
            </div>

        </div>
      </div>
      `;
  },

  async afterRender() {
    const products = await Product.listHome();
    const product = products.data;
    const campaignsList = await Campaign.listHome();
    const campaigns = campaignsList.data;

    const productContainer = document.querySelector(".product-cards");
    const campaignContainer = document.querySelector(".Campaign_List");
    product.forEach((prod) => {
      productContainer.innerHTML += createProductList(prod);
    });

    campaigns.forEach((campaign) => {
      campaignContainer.innerHTML += createCampaignList(campaign);
    });

    const button = document.querySelectorAll("#cart");
    button.forEach((element) => {
      const product = element.getAttribute("data-product");
      element.addEventListener("click", (e) => {
        Product.addToCart(product);
      });
    });

    // Payment
    $("[data-checkout]").on("click", function (e) {
      let self = $(this);
      const $prodId = self.data("checkout");
      let payment = new Payment($prodId);
      // payment.getSnapKey();
      payment.pay();
    });
  },
};

export default Home;
