import { getElement } from "./utils.js";
import { store } from "./store.js";
import { displayItems } from "./displayProducts.js";

const displayCompany = (companies, element) => {
  element.innerHTML = companies
    .map((company) => {
      return ` <button class="cyan-color compBtn">${company}</button>`;
    })
    .join("");

  const companySearch = element.querySelectorAll(".compBtn");

  companySearch.forEach((company) => {
    company.addEventListener("click", (e) => {
      if (e.currentTarget.textContent === "all") {
        displayItems(store, getElement(".pro-page"));
      } else {
        const products = store.filter((item) => {
          if (item.company === e.currentTarget.textContent) {
            return item;
          }
        });

        displayItems(products, getElement(".pro-page"));
      }
    });
  });
};

export { displayCompany };
