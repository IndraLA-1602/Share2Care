import CONFIG from '../globals/config';

class Product {
  static async listHome() {
    const response = await fetch(CONFIG.BASE_URL + 'product?limit=10');
    const resJson = response.json();
    return resJson;
  }

  static async allList() {
    const response = await fetch(CONFIG.BASE_URL + "product");
    const resJson = response.json();
    return resJson;
  }

  static async addToCart(prodId) {
    const data = {
      product: prodId,
      qty: 1,
    };
    const token = localStorage.getItem('token');
    try {
      const product = await fetch(CONFIG.BASE_URL + 'cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      const response = await product.json();
      if (response.status == 'Success') {
        const notif = document.querySelector('.notif');
        notif.classList.remove('hidden');
        setTimeout(() => {
          notif.classList.add('hidden');
        }, 3000);
      }
    } catch (err) {
      console.log(err);
    }
    // const data = response;
  }
}

export default Product;
