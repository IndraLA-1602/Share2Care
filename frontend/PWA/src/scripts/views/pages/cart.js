import CartSource from '../../../data/cartSource';

const Cart = {
  async render() {
    return /*html */ `
      <div class="Cart">
        <h2>Keranjang Donasi</h2>
        <div class="Cart_padding">
          <div class="Cart_title">
            <h4>Produk</h4>
            <h4>Jumlah</h4>
            <h4>Harga</h4>
          </div>
          <div class="Cart_card_padding">
            <div class="Cart_card">
              <div class="Cart_produk">
                <div class="Cart_img">
                  <img src="./public/indomie.jpg" alt="" style="width:30%">
                </div>
                <div class="Cart_detail">
                  <h4>Mi Instan</h4>
                  <p>Indomie</p>
                  <h4>Rp 5000</h4>
                </div>
              </div>
              <div class="Cart_jumlah">
                <div class="Kurang_produk">
                  <button> < </button>
                </div>
                <div class="Banyak_produk">
                <h4> 3 </h4>
                </div>
                <div class="Tambah_produk">
                  <button> > </button>
                </div>
              </div>
              <div class="Cart_harga">
                <h4>Rp 5000</h4>
              </div>
              <div class="Cart_donasi">
                <button>Donasikan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
  },

  async afterRender() {
    const cartList = await CartSource.listCart();
    const cartData = await cartList.data;
  },
};

export default Cart;
