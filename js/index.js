import getCharacters from "./getCharacters.js";
import { carousel } from "./carousel.js";
import header from "./header.js";
import searchBar from "./search_bar.js";
import getAllCharacters from "./getAllCharacters.js";

document.addEventListener("DOMContentLoaded", (e) => {
  getCharacters();
  header();
  carousel();
  searchBar();
  getAllCharacters();
});
