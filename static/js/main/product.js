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
  const title = getElement("title");

  const {
    fields: { colors, name },
  } = product;

  title.textContent = `${name} | comfy`;

  if (product) {
    displaySingleProduct(product, getElement(".single_product_page"));
    const colorsSec = getElement(".colors");
    colors.forEach((color) => {
      const span = document.createElement("span");
      span.classList.add("clr");
      span.style.background = `${color}`;
      colorsSec.appendChild(span);
    });
  }
};

window.addEventListener("DOMContentLoaded", initProduct);
