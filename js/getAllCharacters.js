const d = document;

const getAllCharacters = async () => {
  try {
    let res = await axios.get("https://rickandmortyapi.com/api/character/");
    let json = await res.data.results;

    //   let names = json.map((el) => el.name);
    //   return names;
    let charactersNameId = json.map((character) => ({
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      location: character.location.name,
      image: character.image,
    }));

    return charactersNameId;
  } catch (err) {
    console.error("Error al obtener los datos:", err);
  }
};

export default getAllCharacters;
