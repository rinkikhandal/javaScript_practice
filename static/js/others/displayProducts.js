import { formatPrice } from "./utils.js";
import { addToCart, increment, decrement, removeItem } from "./toggleCart.js";

const displayItems = (products, element) => {
  element.innerHTML = products
    .map((product) => {
      const { id, name, price, image } = product;
      return `<article class="product">
          <div class="pro-img">
            <img src=${image} alt=${name} />
            <div class="pro-icons">
              <a href="./product.html?id=${id}" class="search product_hover">
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
              <button class="cart_btn product_hover cart " data-id='${id}' >
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div class="name-price">
            <h4>${name}</h4>
            <p>${formatPrice(price)}</p>
          </div>
          </article>`;
    })
    .join("");
  const cartbtns = element.querySelectorAll(".cart");
  cartbtns.forEach((cartbtn) => {
    cartbtn.addEventListener("click", () => {
      addToCart(cartbtn.dataset.id);
    });
  });
};

const displaySingleProduct = (product, element) => {
  // console.log(product);
  const {
    id,
    fields: { name, company, price, colors, image: img, description },
  } = product;
  const clr1 = colors[0];
  const clr2 = colors[1] ? colors[1] : "#fff";

  const image = img[0].thumbnails.large.url;

  element.innerHTML = ` <div class="off-white ">home / ${name}</div>

    <div class="displayPro">
      <div class="image-display">
        <img src="${image}" alt="${name}" />
      </div>

      <div class="description">
        <h2>${name}</h2>
        <h3 class="company-name">BY ${company}</h3>
        <p class="price">${formatPrice(price)}</p>
        <div class="colors">
          
        </div>
        <p class="des-para history-para">${description}</p>
        <button class="cart btn-type btn-single " data-id='${id}'>ADD TO CART</button>
      </div>
    </div>
    `;
  const cartbtn = element.querySelector(".cart");
  cartbtn.addEventListener("click", () => {
    addToCart(cartbtn.dataset.id);
  });
};

const displayCartItems = (products, element) => {
  element.innerHTML = products
    .map((product) => {
      const { name, image, price, quantity } = product;
      return `<article>
            <div class='imageCon'>
              <img src='${image}' alt=${name} />
            </div>
            <div class='details'>
              <h4>${name}</h4>
            <p>
              ${formatPrice(price)}
            </p>
            <button class='remove-btn'>remove</button>
            </div>
    <div class='itemPlusMinus'>
      <i class='fa-solid fa-angle-up'></i>
      <p>${quantity}</p>
      <i class='fa-solid fa-angle-down'></i>
    </div>
    </article>`;
    })
    .join("");

  // up arrow========
  const incrementBtns = element.querySelectorAll(".fa-angle-up");

  incrementBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const name =
        e.currentTarget.parentElement.parentElement.querySelector(
          "h4"
        ).textContent;
      const quantity = e.currentTarget.parentElement.querySelector("p");

      quantity.textContent = parseInt(quantity.textContent) + 1;

      increment(name);
    });
  });

  // down arrow========

  const decrementBtns = element.querySelectorAll(".fa-angle-down");

  decrementBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const name =
        e.currentTarget.parentElement.parentElement.querySelector(
          "h4"
        ).textContent;

      const quantity = e.currentTarget.parentElement.querySelector("p");
      const quantityNumber = parseInt(quantity.textContent);

      if (quantityNumber > 1) {
        quantity.textContent = `${quantityNumber - 1}`;
        decrement(name);
      } else {
        removeItem(name, e);
      }
    });
  });

  // remove btn=======
  const removeBtn = element.querySelector(".remove-btn");

  removeBtn.addEventListener("click", (e) => {
    const name =
      e.currentTarget.parentElement.parentElement.querySelector(
        "h4"
      ).textContent;
    removeItem(name, e);
  });
};

export { displayItems, displaySingleProduct, displayCartItems };
