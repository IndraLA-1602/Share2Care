import Home from "../views/pages/home";
import AboutUs from "../views/pages/about-us";
import Cart from "../views/pages/cart";
import Profile from "../views/pages/profile";
import Login from "../views/pages/login";
import Register from "../views/pages/register";
import ProductPage from "../views/pages/product";

const routes = {
  "/": Home,
  "/home": Home,
  "/about-us": AboutUs,
  "/cart": Cart,
  "/profile": Profile,
  "/login": Login,
  "/register": Register,
  "/product": ProductPage,
};

export default routes;
