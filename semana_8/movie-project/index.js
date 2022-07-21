// La logica del DOM
import { getMovies } from "./service/index.js";

const btnGetMovies = document.querySelector("#btn-get-movies");
const containerMovies = document.querySelector("#container-movies");

btnGetMovies.onclick = async function () {
  const movies = await getMovies();

  containerMovies.innerHTML = "";

  movies
    .sort(() => 0.5 - Math.random())
    .forEach(async (movie) => {
      const imageUrl = movie.images["Poster Art"].url;

      const response = await fetch(imageUrl);
      if (response.ok) {
        // Si la peticion de la imagen esta ok vamos a renderizar la pelicula
        renderMovie(movie);
      }
    });
};

function renderMovie(movie) {
  // va a contar la cantidad elmentos renderizado en nuestro html
  const movies = document.querySelectorAll("#container-movies .col");

  if (movies.length === 20) return;

  containerMovies.innerHTML += `
    <div class="col">
      <div class="card my-3">
        <div class="into-photo">
          <span class="badge text-bg-${
            movie.programType === "series" ? "success" : "warning"
          }">${movie.programType}</span>
          <img
            src="${movie.images["Poster Art"].url}"
            class="card-img-top"
            alt=""
          />
        </div>
        <div class="card-body">
          <div class="card-title">${movie.title}</div>
        </div>
      </div>
    </div>
  `;
}
