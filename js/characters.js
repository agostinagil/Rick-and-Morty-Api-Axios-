export default function getCharacters() {
  const d = document,
    $template = d.getElementById("card-template").content,
    $fragment = d.createDocumentFragment(),
    $cards = d.querySelector(".cards-slides");

  const getAll = async () => {
    try {
      let res = await axios.get(
        "https://rickandmortyapi.com/api/character/[1,2,3,4,5,6]"
      );
      let json = await res.data;
      console.log(res.data);

      json.forEach((el) => {
        $template.querySelector(".card-img").src = el.image;
        $template.querySelector(".card-title").textContent = el.name;
        $template.querySelector(".card-img").alt = el.name;
        $template.querySelector("#specie").textContent = el.species;
        $template.querySelector("#location").textContent = el.location.name;
        if (el.status === "Alive") {
          $template.querySelector("#status").classList.remove("unknown");
          $template.querySelector("#status").classList.remove("dead");
          $template.querySelector("#status").classList.add("alive");
          // console.log("alive");
        } else if (el.status === "Dead") {
          $template.querySelector("#status").classList.remove("alive");
          $template.querySelector("#status").classList.remove("unknown");
          $template.querySelector("#status").classList.add("dead");
          // console.log("dead", el.status);
        } else {
          $template.querySelector("#status").classList.remove("alive");
          $template.querySelector("#status").classList.remove("dead");
          $template.querySelector("#status").classList.add("unknown");
          console.log("unknown");
        }

        let $clone = d.importNode($template, true);

        $fragment.appendChild($clone);
      });
      $cards.appendChild($fragment);

      let firstCharacter = $cards.firstElementChild;
      firstCharacter.classList.add("active");
    } catch (err) {
      console.error("Error al obtener los datos:", err);
    }
  };

  d.addEventListener("DOMContentLoaded", getAll());
}
