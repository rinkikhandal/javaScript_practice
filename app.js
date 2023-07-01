const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const groceryInput = document.querySelector("input");
const submitBtn = document.querySelector(".submit-btn");
const list = document.querySelector(".grocery-list");
const container = document.querySelector(".grocery-container");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";
// +++++++++++++++++ event listener ++++++++++++++++
// submit form
form.addEventListener("submit", addItem);
// +++++++++++++++++ functions ++++++++++++++++
function addItem(e) {
  e.preventDefault();
  const value = groceryInput.value;
  const id = new Date().getTime().toString();
  if (value !== "" && editFlag === false) {
    createListItem(id, value);
    // show clr-btn
    clearBtn.classList.add("showClr-btn");
    // alert
    displayAlert("item added to the list", "green");
    // setDefault
    setBackToDefault();
    // add to loclal storage
    addToLocalStorage(id, value);
  } else if (value !== "" && editFlag === true) {
    editElement.innerHTML = value;
    // edit local storage
    displayAlert("the item is edited", "green");
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "red");
  }
}
// display alert
const displayAlert = (text, action) => {
  alert.textContent = text;
  alert.classList.add(`${action}-alert`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`${action}-alert`);
  }, 1000);
};
// editing
const editItem = (e) => {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  groceryInput.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
};
// delete
const deleteItem = (e) => {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    clearBtn.classList.remove("showClr-btn");
  }
  displayAlert("item removed", "red");
  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
};
// load Items
window.addEventListener("DOMContentLoaded", setupItems);

// clearbtn
clearBtn.addEventListener("click", () => {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
    setBackToDefault();
  }
  clearBtn.classList.remove("showClr-btn");
  displayAlert("empty list", "red");
  localStorage.removeItem("list");
});
// set back to default
function setBackToDefault() {
  groceryInput.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "Submit";
}
// +++++++++++++++++ LOCAL STORAGE ++++++++++++++++
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getlocalStorage();

  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}
// remove from storage
const removeFromLocalStorage = (id) => {
  let items = getlocalStorage();
  items = items.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
};
// edit local storage
const editLocalStorage = (editID, value) => {
  let items = getlocalStorage();
  items = items.map((item) => {
    if (item.id === editID) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
};

const getlocalStorage = () => {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
};
// +++++++++++++++++ SET UP ITEMS ++++++++++++++++

function setupItems() {
  let items = getlocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      createListItem(item.id, item.value);
    });
    clearBtn.classList.add("showClr-btn");
  }
}

// createlist
function createListItem(id, value) {
  const article = document.createElement("article");
  // add class
  article.classList.add("grocery-item");
  // add id
  const attr = document.createAttribute("data-id");
  attr.value = id;
  article.setAttributeNode(attr);
  article.innerHTML = `<p  class="title tracking-widest">${value}</p>
            <div class=btn-container">
              <button class="edit">
                <i
                  class="fa-solid fa-pen-to-square fa-sm text-green-600 mr-2"
                ></i>
              </button>
              <button class="delete">
                <i class="fa-solid fa-trash-can fa-sm text-red-600"></i>
              </button>
            </div>`;
  // edit and delete
  const deleteBtn = article.querySelector(".delete");
  const editBtn = article.querySelector(".edit");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);
  // adding to the list
  list.appendChild(article);
}
