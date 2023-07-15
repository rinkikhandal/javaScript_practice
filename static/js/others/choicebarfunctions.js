import { getElement } from "./utils.js";
import { store } from "./store.js";

const formOne = getElement(".form1");
const inputOne = getElement(".searchBar");

formOne.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = inputOne.value;
  searchItems = store.filter((item) => {
    if (item.name === name) {
      
    }
  });
});

const companies = store.reduce(
  (final, item) => {
    if (!final.includes(item.company)) {
      final.push(item.company);
    }
    return final;
  },
  ["all"]
);

export { companies };
