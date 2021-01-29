function isOpen() {
  let elem = document.querySelector(".item-header__toggle-menu");
  let body = document.querySelector("body");
  elem.classList.toggle("open");
  body.classList.toggle("noScroll");
}
