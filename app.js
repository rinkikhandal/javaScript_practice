// ********* close links **********
const menuBtn = document.querySelector(".menuBar");
const links = document.querySelector(".links");
const linksContainer = document.querySelector(".links-container");
const headerContent = document.querySelector(".header-content");
menuBtn.addEventListener("click", () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
    headerContent.style.marginTop = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
    headerContent.style.marginTop = 0;
  }
});

// ********* set date **********
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

// ********* scroll nav **********
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
    topLink.style.display = "block";
  } else {
    navbar.classList.remove("fixed-nav");
    topLink.style.display = "none";
  }
});

// ********* smooth scroll **********
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    // prevent default
    e.preventDefault();

    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (navHeight > 82) {
      position += containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
    linksContainer.style.height = 0;
    headerContent.style.marginTop = 0;
  });
});
