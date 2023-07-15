const allProductsUrl = "https://course-api.com/javascript-store-products";
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  "https://course-api.com/javascript-store-single-product";

function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`sorry the ${selection} does not exist`);
  }
}

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item)
    ? JSON.parse(localStorage.getItem(item))
    : [];
  return storageItem;
};

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

const formatPrice = (price) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return formattedPrice;
};

export {
  getElement,
  allProductsUrl,
  singleProductUrl,
  getStorageItem,
  setStorageItem,
  formatPrice,
};
