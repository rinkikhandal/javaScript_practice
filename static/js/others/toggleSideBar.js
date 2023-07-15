import { getElement } from "./utils.js";

// for navbar on small

const cross = getElement(".cross-nav");
const menu = getElement(".fa-bars");
const links = getElement(".links");

menu.addEventListener("click", () => {
  links.classList.add("show-links");
});

cross.addEventListener("click", () => {
  links.classList.remove("show-links");
});
