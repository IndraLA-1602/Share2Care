import Product from "../../../data/productsSource";
import { createProductList } from "../templates/template-creator";

const ProductPage = {
  async render() {
    return `
    <div class="productPage donasi">
        <h1>Product Donasi Share2Care</h1>
        <div class="Donasi_list">
        
        </div>
    </div>
    `;
  },
  async afterRender() {
    const products = await Product.allList();
    const product = products.data;

    const productContainer = document.querySelector(".Donasi_list");

    product.forEach((prod) => {
      productContainer.innerHTML += createProductList(prod);
    });

    const button = document.querySelectorAll("#cart");
    button.forEach((element) => {
      const product = element.getAttribute("data-product");
      element.addEventListener("click", (e) => {
        Product.addToCart(product);
      });
    });
  },
};

export default ProductPage;
