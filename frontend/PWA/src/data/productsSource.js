import CONFIG from "../globals/config";

class ProductList {
  static async listHome() {
    const response = await fetch(CONFIG.BASE_URL + "product?limit=10");
    const resJson = response.json();
    return resJson;
  }
}

export default ProductList;
