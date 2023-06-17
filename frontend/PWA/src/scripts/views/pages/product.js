import Product from "../../../data/productsSource";
import { createProductList } from "../templates/template-creator";
// import datas from "./dummy-data.js";

const ProductPage = {
  async render() {
    return `
    <div class="donasi">
        <div class="category">
            <ul>
                <li><a href="#">Bahan Baku</a></li>
                <li><a href="#">Sandang</a></li>
                <li><a href="#">Alat Sekolah</a></li>
                <li><a href="#">Penunjang Sekolah</a></li>
            </ul>
        </div>
        <div class="Donasi_list">
        
        </div>
    </div>
    `;
  },
  async afterRender() {
    const products = await Product.listHome();
    const product = products.data;

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

    // console.log(datas);
    // const productContainer = document.querySelector(".Donasi_list");

    // datas.forEach((prod) => {
    //   productContainer.innerHTML += createProductList(prod);
    // });
  },
};

export default ProductPage;
