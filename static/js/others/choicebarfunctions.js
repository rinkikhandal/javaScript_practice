import { getElement } from "./utils.js";
import { displayItems } from "./displayProducts.js";

const setUpSearch = (store) => {
  const formOne = getElement(".form1");
  const inputOne = getElement(".searchBar");

  formOne.addEventListener("keyup", (e) => {
    e.preventDefault();
    const value = inputOne.value;
    if (value) {
      const searchItems = store.filter((item) => {
        let { name } = item;
        name = name.toLowerCase();
        if (name.startsWith(value)) {
          return item;
        }
      });
      if (searchItems.length === 0) {
        const sorryMessage = getElement(".pro-page");
        sorryMessage.innerHTML = `<h2 class="load">Sorry, No Products Matched Your Search</h2>`;
      } else {
        displayItems(searchItems, getElement(".pro-page"));
      }
    } else {
      displayItems(store, getElement(".pro-page"));
    }
  });
};

const uniqueCompany = (store) => {
  const companies = store.reduce(
    (final, item) => {
      if (!final.includes(item.company)) {
        final.push(item.company);
      }
      return final;
    },
    ["all"]
  );
  return companies;
};

const setUpPrice = (store) => {
  const formTwo = getElement(".form2");
  const inputTwo = getElement(".rangeBar");
  const valueLabel = getElement(".range-value");

  let maxPrice = store.reduce((total, item) => {
    const { price } = item;
    if (price > total) {
      total = price;
    } else {
    }
    return total;
  }, 0);

  maxPrice = Math.ceil(maxPrice / 100);
  inputTwo.value = maxPrice;
  inputTwo.max = maxPrice;
  inputTwo.min = 0;
  valueLabel.textContent = maxPrice;

  formTwo.addEventListener("input", (e) => {
    e.preventDefault();
    const value = parseInt(inputTwo.value);
    valueLabel.textContent = value;
    const priceItems = store.filter((item) => {
      let { price } = item;
      price = price / 100;

      if (value >= price) {
        return item;
      }
    });
    if (priceItems.length > 0) {
      displayItems(priceItems, getElement(".pro-page"));
    } else {
      const sorryMessage = getElement(".pro-page");
      sorryMessage.innerHTML = `<h2 class="load">Sorry, No Products Matched Your Search</h2>`;
    }
  });
};

export { uniqueCompany, setUpSearch, setUpPrice };
