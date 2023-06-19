import CONFIG from '../globals/config';

class CartSource {
  static async listCart() {
    const token = localStorage.getItem('token');
    const response = await fetch(CONFIG.BASE_URL + 'cart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const resJson = await response.json();
    return resJson;
  }
}

export default CartSource;
