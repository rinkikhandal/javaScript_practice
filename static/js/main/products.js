import "../others/toggleSideBar.js";
import "../others/toggleCart.js";
import "../others/choicebarfunctions.js";
import { displayItems } from "../others/displayProducts.js";
import { showProducts } from "../others/fetchProducts.js";
import { setupStore, store, findProduct } from "../others/store.js";
import { getElement } from "../others/utils.js";
import { displayCompany } from "../others/displayUniqueCompany.js";
import { companies } from "../others/choicebarfunctions.js";

const initProducts = () => {
  displayItems(store, getElement(".pro-page"));
  displayCompany(companies, getElement(".comp_names"));
};

window.addEventListener("DOMContentLoaded", initProducts);
