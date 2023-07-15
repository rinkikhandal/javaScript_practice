import "../others/toggleSideBar.js";
import "../others/toggleCart.js";
import { displayItems } from "../others/displayProducts.js";
import { showProducts } from "../others/fetchProducts.js";
import { setupStore, store, findProduct } from "../others/store.js";
import { getElement } from "../others/utils.js";

const init = async () => {
  if (store) {
    console.log("hell");
    const featured = store.filter((product) => product.featured === true);
    displayItems(featured, getElement(".featured-products"));
  } else {
    console.log("why am i being called");
    const products = await showProducts();
    if (products) {
      setupStore(products);
      const featured = store.filter((product) => product.featured === true);
      displayItems(featured, getElement(".featured-products"));
    }
  }
};

window.addEventListener("DOMContentLoaded", init);
