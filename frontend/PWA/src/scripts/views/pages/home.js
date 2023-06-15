import CampaignList from "../../../data/campaignSource";
import ProductList from "../../../data/productsSource";

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

    <div class="campaign">
      <p>Berbagi Kasih, Menebar Kebaikan Bersama Share2Care!</p>
      <h1>Bergabunglah sekarang dan berikan kontribusi melalui donasi online yang mudah dan bermanfaat</h1> 
      <div class="Campaign_List">
        
      </div>
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
            <h2>Fitur Unggulan 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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

    <div class="ulasan">
      <p>Ulasan Pengguna Share2Care</p>
      <h1>Kisah Inspiratif Pengguna Share2Care Mewarnai Dunia dengan Donasi dan Kebaikan</h1>
      <div class="CardUlasan">
        <div class="container_ulasan">
          <div class="ulasan_image">
            <img src="./public/user.png" alt="" style="width:5%">
          </div>
            <p> Aplikasi donasi memberikan kesempatan bagi pengguna dari berbagai belahan dunia untuk berpartisipasi dalam memberikan sumbangan. Ini memperluas jangkauan dan dampak potensial dari kampanye donasi, memungkinkan orang-orang dari segala latar belakang untuk membantu dalam penyebab yang mereka anggap penting.</p> 
            <h5><b>Jane</b></h5> 
        </div>
      </div>
      <div class="CardUlasan">   
        <div class="container_ulasan">   
          <div class="ulasan_image">
            <img src="./public/user.png" alt="" style="width:5%">
          </div>
          <p>Aplikasi donasi memungkinkan pengguna untuk dengan mudah menyumbangkan dana dengan hanya beberapa ketukan pada layar smartphone mereka. Mereka biasanya menyediakan antarmuka yang intuitif dan user-friendly, sehingga siapa pun dapat dengan cepat mengakses dan menggunakan aplikasi tersebut.</p> 
          <h5><b>Doe</b></h5>               
        </div>
      </div>
      <div class="CardUlasan">
        <div class="container_ulasan">
          <div class="ulasan_image">
            <img src="./public/user.png" alt="" style="width:5%">
          </div>
          <p>Aplikasi donasi sering kali menyediakan fitur-fitur yang memungkinkan pengguna untuk berbagi kampanye donasi dengan teman-teman mereka di media sosial atau mengundang mereka untuk berpartisipasi. Ini menciptakan efek jaringan yang dapat membantu kampanye mencapai lebih banyak orang, menggalang dana yang lebih banyak, dan meningkatkan kesadaran tentang isu-isu yang relevan.</p> 
          <h5><b>Jane Doe</b></h5>
        </div>
      </div>
    </div>
      `;
  },

  async afterRender() {
    const products = await ProductList.listHome();
    const product = products.data;
    const campaignsList = await CampaignList.listHome();
    const campaigns = campaignsList.data;

    const productContainer = document.querySelector(".Donasi_list");
    const campaignContainer = document.querySelector(".Campaign_List");
    product.forEach((prod) => {
      productContainer.innerHTML += `
      <div class="Card_Donasi">
        <div class="Container_Donasi">
          <div class="Donasi_img">
            <img src="${prod.image}" alt="" style="width:70%">
          </div>
          <h4>${prod.product_name}</h4>
          <p>${prod.category}</p>
          <h3>Rp. ${prod.price}</h3>
        </div>
      </div>
      `;
    });

    campaigns.forEach((campaign) => {
      campaignContainer.innerHTML += `
      <div class="CardCampaign">
        <div class="container_campaign">
          <div class="campaign_image">
            <img src="./public/campaign.png" alt="" style="width:15%">
          </div>
          <h2><b>${campaign.name}</b></h2> 
        </div> 
      </div>
      `;
    });
  },
};

export default Home;
