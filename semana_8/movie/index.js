const url =
  "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json";

fetch(url)
  .then((respuestita) => respuestita.json())
  .then((datos) => console.log(datos));

// console.log(peticion);
// recordemos que fetch retorna una promesa esta tiene 2 escenario
//* resolve (resolver) => Es ocurre cuando la peticion esta ok
//! reject (rechazar) => Es cuando algo fallo

//* then() Es un callback, es una funcion que se ejecuta cuando algo terminar

// Ejemplo con el A""PI de pokemon
const urlPokemon = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

fetch(urlPokemon)
  .then((response) => response.json())
  .then((data) => console.log(data));
