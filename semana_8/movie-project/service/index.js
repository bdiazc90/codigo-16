// Estarea los metodos para poder
/**
 * Obten      => GET
 * Crear      => POST
 * Actualizar => PUT
 * Eliminar   => DELETE
 */
import { urlMovies, mockAPIUrl } from "./config.js";

/**
 * Funcion que retorna las 100 peliculas
 */

export const getMovies = async () => {
  try {
    const response = await fetch(urlMovies);
    // tiene 2 key
    /**
     * data =>
     * total: 100
     * entries: []
     */
    const { entries } = await response.json();
    return entries;
  } catch (error) {
    return error;
  }
};
