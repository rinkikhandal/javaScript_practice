import { getStorageItem, setStorageItem } from "./utils.js";

let store = getStorageItem("store");
const setupStore = (products) => {
  const store = products.map((product) => {
    const {
      id,
      fields: { featured, name, company, price, colors, image: img },
    } = product;

    const image = img[0].thumbnails.large.url;
    return { id, featured, name, company, price, colors, image };
  });
  setStorageItem("store", store);
};

const findProduct = () => {};

export { store, setupStore, findProduct };
