import CartSource from '../../../data/cartSource';
import redirect from '../../component/utils/redirect';
import { createCartList } from '../templates/template-creator';

const Cart = {
  async render() {
    return `
      <div class="Cart">
        <h2>Keranjang Donasi</h2>
        <div class="Cart_padding">
          <div class="Cart_title">
            <h4>Produk</h4>
            <h4>Jumlah</h4>
            <h4>Harga</h4>
          </div>
          <div class="Cart_card_padding">
            
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const $cartContainer = document.querySelector('.Cart_card_padding');
    if (localStorage.getItem('token')) {
      const $cartList = await CartSource.listCart();
      const $cartData = await $cartList.data;
      $cartData.forEach((data) => {
        $cartContainer.innerHTML += createCartList(data);
      });
    } else {
      redirect('/login');
    }
  },
};

export default Cart;
