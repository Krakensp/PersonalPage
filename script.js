import data from "./src/helpers/data.json" assert { type: "json" };
import resortJson from "./src/modules/resortJson.js";
import carrousel from "./src/modules/carrousel.js";
import menu from "./src/modules/menu.js";
import getKnowled from "./src/modules/knowledContent.js";

const d = document;
let practice = 0;

/*************CARROUSEL VARIABLES ***********/
const $prevBtn = d.getElementById("practices-prev-btn");
const $nextBtn = d.getElementById("practices-next-btn");
const $title = d.getElementById("practices-title");
const $image = d.getElementById("practices-image");
const $link = d.getElementById("practices-link");
const $body = d.getElementById("practices-description");
/************ MENU VARIABLES *************************/
const $menu = d.querySelector(".menu");
const $btn = d.querySelector(".hamburger-btn");
/*********** KNOWLEDS VARIABLES*************************/

// const $backEndBtn = d.getElementById("front-end-btn");
// const $frontEndBtn = d.getElementById("front-end-btn");
const $knowleds = d.getElementById("knowled-content");


d.addEventListener("DOMContentLoaded", (e) => {
  resortJson("what-i-do", data.mainData.whatIDo);
  $title.innerText =
    data.mainData.proyectsAndPractices[0].name +
    " (" +
    data.mainData.proyectsAndPractices[0].type +
    ")";
  $image.src = data.mainData.proyectsAndPractices[0].image;
  $body.innerText = data.mainData.proyectsAndPractices[0].description;
  $link.href = data.mainData.proyectsAndPractices[0].url;

  getKnowled(data.mainData.knowled,"front-end",$knowleds)
  
});

d.addEventListener("click", (e) => {
  e.stopPropagation();

  if (e.target.matches("#practices-prev-btn")) {
    practice = carrousel("back", $title, $image, $body, $link, data, practice);
  }

  if (e.target.matches("#practices-next-btn")) {
    practice = carrousel("next", $title, $image, $body, $link, data, practice);
  }

  if (e.target.matches(".btn-menu")) {
    menu($menu, $btn);
  }

  if(e.target.matches(".table-btn")){
    getKnowled(data.mainData.knowled,e.target.dataset.knowled,$knowleds)
  }
});
