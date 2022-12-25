export const toggleMenu = function (event) {
  event.preventDefault();

  if (burgerMenu.classList.contains("burger-menu-active")) {
    burgerMenu.classList.remove("burger-menu-active");
  } else {
    burgerMenu.classList.add("burger-menu-active");
  }
};
