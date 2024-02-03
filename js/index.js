import getCharacters from "./characters.js";
import { carousel } from "./carousel.js";
import header from "./header.js";
import searchBar from "./search_bar.js";

document.addEventListener("DOMContentLoaded", (e) => {
  getCharacters();
  header();
  carousel();
  searchBar();
});
