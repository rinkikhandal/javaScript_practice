import { cartSideBarAppear } from "./toggleCart.js";
import { allProductsUrl, singleProductUrl, getElement } from "./utils.js";

const showProducts = async () => {
  try {
    const response = await fetch(allProductsUrl);
    const products = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};

const showSingleProduct = async (id) => {
  const url = `${singleProductUrl}?id=${id}`;

  try {
    const response = await fetch(url);
    const product = await response.json();
    return product;
  } catch (error) {
    console.log(error);
  }
};

export { showProducts, showSingleProduct };
