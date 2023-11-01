import data from "./src/helpers/data.json" assert { type: "json" };
import resortJson from "./src/modules/resortJson.js";
import carrousel from "./src/modules/carrousel.js";
import menu from "./src/modules/menu.js";

const d = document;
let practice = 0;

/*************CARROUSEL VARIABLES ***********/
const $prevBtn = d.getElementById("practices-prev-btn");
const $nextBtn = d.getElementById("practices-next-btn");
const $title = d.getElementById("practices-title");
const $image = d.getElementById("practices-image");
const $body = d.getElementById("practices-description");
/************ FIN *************************/
const $menu = d.querySelector(".menu");
const $btn = d.querySelector(".hamburger-btn");

d.addEventListener(
  "DOMContentLoaded",
  resortJson("what-i-do", data.mainData.whatIDo)
);

d.addEventListener("click", (e) => {
  e.stopPropagation();

  if (e.target.matches("#practices-prev-btn")) {
    practice = carrousel("back", $title, $image, $body, data, practice);
  }

  if (e.target.matches("#practices-next-btn")) {
    practice = carrousel("next", $title, $image, $body, data, practice);
  }

  if (e.target.matches(".btn-menu")) {
    menu($menu, $btn);
  }
});
