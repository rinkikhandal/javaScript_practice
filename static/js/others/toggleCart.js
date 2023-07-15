import { displayCartItems } from "./displayProducts.js";
import {
  formatPrice,
  getElement,
  getStorageItem,
  setStorageItem,
} from "./utils.js";
import { store } from "./store.js";

const cartBtns = document.querySelectorAll(".cart");

const cartSideBar = getElement(".cartsideBar");
const cartContainer = getElement(".cart-container");

const crossInCart = getElement(".fa-incart");

// cart set up================

let cartItems = getStorageItem("cartItems");

const setUpCart = (id) => {
  const item = store.filter((item) => item.id === id)[0];
  if (cartItems.length > 0 && cartItems.filter((item) => item.id === id)[0]) {
    cartItems = cartItems.filter((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
      return item;
    });
  } else {
    item.quantity = 1;
    cartItems.push(item);
  }
};
// item removal===================

const removeItem = (name, event) => {
  cartItems = cartItems.filter((item) => item.name !== name);
  const article = event.currentTarget.parentElement.parentElement;
  article.style.display = "none";
  setStorageItem("cartItems", cartItems);
  totalQuantity();
  totalAmount();
};

// item decrement===================

const decrement = (name) => {
  cartItems = cartItems.filter((item) => {
    if (item.name === name) {
      item.quantity -= 1;
    }
    return item;
  });
  setStorageItem("cartItems", cartItems);
  totalQuantity();
  totalAmount();
};

// item increment===================

const increment = (name) => {
  cartItems = cartItems.map((item) => {
    if (item.name === name) {
      item.quantity += 1;
    }
    return item;
  });
  setStorageItem("cartItems", cartItems);
  totalQuantity();
  totalAmount();
};

//end of cart set up================

// cart toggle ==============

const cartSideBarAppear = () => {
  if (cartItems.length > 0) {
    displayCartItems(cartItems, getElement(".cart-items"));
  }
  cartSideBar.style.visibility = "visible";
  cartContainer.style.right = "0px";
};

const cartSideBarDissAppear = () => {
  cartSideBar.style.visibility = "hidden";
  cartContainer.style.right = "-400px";
};

cartBtns.forEach((btn) => {
  btn.addEventListener("click", cartSideBarAppear);
});

crossInCart.addEventListener("click", cartSideBarDissAppear);

//end of cart toggle ==============

// adding to cart===============

const addToCart = (id) => {
  setUpCart(id);
  setStorageItem("cartItems", cartItems);
  displayCartItems(cartItems, getElement(".cart-items"));

  cartSideBarAppear();
  totalQuantity();
  totalAmount();
};

// end of adding to cart===============

// cart amount==============

const totalAmount = () => {
  const totalAmount = getElement(".amount");
  let amount = cartItems.reduce((total, item) => {
    total += item.price * item.quantity;
    return total;
  }, 0);

  totalAmount.textContent = formatPrice(amount);
};

// end of cart amount==============

// cart items total============

const totalQuantity = () => {
  const cartTotalQuantity = getElement(".cart-no");
  let number = cartItems.reduce((total, item) => {
    total += item.quantity;
    return total;
  }, 0);

  cartTotalQuantity.textContent = number;
};

// end of cart items total============

// function call =========

if (cartItems.length > 0) {
  totalQuantity();
  totalAmount();
}

//end of function call =========

export {
  cartSideBarAppear,
  cartSideBarDissAppear,
  addToCart,
  increment,
  decrement,
  removeItem,
};
