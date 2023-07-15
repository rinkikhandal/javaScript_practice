import "../others/toggleSideBar.js";
import "../others/toggleCart.js";
import {
  displayItems,
  displaySingleProduct,
} from "../others/displayProducts.js";
import { showSingleProduct } from "../others/fetchProducts.js";
import { setupStore, store, findProduct } from "../others/store.js";
import { getElement } from "../others/utils.js";

const initProduct = async () => {
  const id = window.location.search.slice(4);
  const product = await showSingleProduct(id);

  if (product) {
    displaySingleProduct(product, getElement(".single_product_page"));
  }
};

window.addEventListener("DOMContentLoaded", initProduct);
