import CONFIG from "../../../globals/config";

const createProductList = (product) => `
        <div class="product-card">
          <div class="product-image"><img src="${
            CONFIG.IMAGE_URL + product.image
          }"></div>
          <div class="product-info">
            <h3>${product.product_name}</h3>
            <p>${product.category}</p>
            <h4>Rp. ${product.price}</h4>
          </div>
          <div class="cart-button" id="cart" data-product=${product.id}>
            <i class="fas fa-shopping-cart"></i>
          </div>
        </div>
`;

const createCampaignList = (campaign) => `
  <div class="CardCampaign">
    <div class="container_campaign">
      <div class="campaign_image">
        <img src="./public/campaign.png" alt="" style="width:15%">
      </div>
      <h2><b>${campaign.name}</b></h2> 
    </div> 
  </div>
`;

const createCartList = (cart) => `
  <div class="Cart_card">
    <div class="Cart_produk">
      <div class="Cart_img">
        <img src="${
          CONFIG.IMAGE_URL + cart.products.image
        }" alt="" style="width:100%; margin-right: 10px;" />
      </div>
      <div class="Cart_detail">
        <h4>${cart.products.product_name}</h4>
        <p>${cart.products.category}</p>
        <h4>Rp ${cart.products.price}</h4>
      </div>
    </div>
    <div class="Cart_jumlah">
      <div class="Kurang_produk">
        <button><</button>
      </div>
      <div class="Banyak_produk">
        <h4>1</h4>
      </div>
      <div class="Tambah_produk">
        <button>></button>
      </div>
    </div>
    <div class="Cart_harga">
      <h4>Rp ${cart.products.price}</h4>
    </div>
    <div class="Cart_donasi">
      <button data-checkout=${cart.products.id} data-cart=${
  cart.id
}>Donasikan</button>
    </div>
  </div>
`;

export { createProductList, createCampaignList, createCartList };

{
  /* <div class="Card_Donasi">
<div class="Container_Donasi">
  <div class="Donasi_img">
    <img src="${
      CONFIG.IMAGE_URL + product.image
    }" alt="" style="width:70%">
  </div>
  <h4>${product.product_name}</h4>
  <p>${product.category}</p>
  <h3>Rp. ${product.price}</h3>

  <div class="button_container">
    <button class="button_card" id="cart" data-product=${
      product.id
    }>Masukan Keranjang</button>
    <button class="button_card" id="beli" data-checkout=${
      product.id
    }>Beli</button>
  </div>
</div>
</div> */
}
