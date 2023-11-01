/************ MENU ***********************/

const d = document;

export default function menu(element, btn) {
  element.classList.toggle("active");
  btn.classList.toggle("btn-menu-active");
}
