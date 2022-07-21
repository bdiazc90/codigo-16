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
      // dentro del forEach no se hereda el async por ender hay que hacer
      // que el forEach se async
      const imageUrl = movie.images["Poster Art"].url;

      const response = await fetch(imageUrl);
      // sepamos que si una peticion falla el response.ok sera false
      /// si no sera resposne.ok seta true
      if (response.ok) {
        // Si la peticion de la imagen esta ok vamos a renderizar la pelicula
        renderMovie(movie);
      }
    });
};

function renderMovie(movie) {
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
