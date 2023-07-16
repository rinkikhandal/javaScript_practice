const choice = document.querySelectorAll(".js_choice");
const btns = document.querySelectorAll(".btn");

// clr choice=======
choice[0].addEventListener("click", function () {
  choice[0].classList.add("js_choice1");
  choice[1].classList.remove("js_choice1");
});
choice[1].addEventListener("click", function () {
  choice[1].classList.add("js_choice1");
  choice[0].classList.remove("js_choice1");
});

// size-choice======
let prev_index = 2;
function Index_N0(x) {
  for (let i = 0; i < btns.length; i++) {}
}
