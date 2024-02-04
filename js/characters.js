import getAllCharacters from "./getAllCharacters.js";
import header from "./header.js";
import searchBar from "./search_bar.js";

const d = document;

const $template = d.getElementById("card-template").content,
  $cards = d.querySelector(".characters-cards"),
  $fragment = d.createDocumentFragment();

const listOfCharacters = async () => {
  try {
    const characters = await getAllCharacters();

    characters.forEach((character) => {
      $template.querySelector(".character-card-img").src = character.image;
      $template.querySelector(".character-card-img").alt = character.name;
      $template.querySelector(".character-card-title").textContent =
        character.name;
      $template.querySelector("#specie").textContent = character.species;
      $template.querySelector("#location").textContent = character.location;
      $template.querySelector(".character-card-btn").href = character.image;
      $template.querySelector(".character-card-btn").target = "_blank";

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $cards.appendChild($fragment);
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  header();
  searchBar();
  listOfCharacters();
});
