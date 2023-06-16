import CONFIG from "../../../globals/config";

const createProductList = (product) => `
    <div class="Card_Donasi">
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
            <button class="button_card">Beli</button>
          </div>
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

export { createProductList, createCampaignList };
