import "../others/toggleSideBar.js";
import "../others/toggleCart.js";
import "../others/choicebarfunctions.js";
import { displayItems } from "../others/displayProducts.js";
import { showProducts } from "../others/fetchProducts.js";
import { setupStore, store, findProduct } from "../others/store.js";
import { getElement } from "../others/utils.js";
import { displayCompany } from "../others/displayChoicebars.js";
import {
  uniqueCompany,
  setUpSearch,
  setUpPrice,
} from "../others/choicebarfunctions.js";

displayItems(store, getElement(".pro-page"));
displayCompany(uniqueCompany(store), getElement(".comp_names"));
setUpSearch(store);
setUpPrice(store);