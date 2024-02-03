const d = document;

export default function searchBar() {
  const $searchBar = d.querySelector("#search-header"),
    $resultsList = d.querySelector(".ul-header"),
    $link = d.querySelector(".ul-link");

  const getAll = async () => {
    try {
      let res = await axios.get("https://rickandmortyapi.com/api/character/");
      let json = await res.data.results;

      //   let names = json.map((el) => el.name);
      //   return names;
      let charactersNameId = json.map((character) => ({
        id: character.id,
        name: character.name,
      }));

      return charactersNameId;
    } catch (err) {
      console.error("Error al obtener los datos:", err);
    }
  };

  const updateList = async () => {
    const searchTerm = $searchBar.value.toLowerCase().trim();
    $resultsList.innerHTML = ""; // clear the name list

    if (searchTerm.length === 0) {
      $resultsList.style.display = "none"; // hide list if there is no search term
      return;
    }

    const characters = await getAll();

    characters.forEach((character) => {
      console.log(character.name);
      if (character.name.toLowerCase().includes(searchTerm)) {
        const listItem = document.createElement("li");
        const link = d.createElement("a");
        link.classList.add("link-searchbar");
        link.textContent = character.name;
        link.href = `https://rickandmortyapi.com/api/character/${character.id}`;
        link.target = "_blank";
        listItem.appendChild(link);
        $resultsList.appendChild(listItem);
      }
    });

    $resultsList.style.display = "block"; // show name list
  };

  // hide name list on page load
  $resultsList.style.display = "none";

  // listen to input event on search field
  $searchBar.addEventListener("input", updateList);
}
