import getCharacters from "./characters.js";
import { carousel } from "./carousel.js";
import header from "./header.js";

document.addEventListener("DOMContentLoaded", (e) => {
  getCharacters();
  header();
  carousel();
});
