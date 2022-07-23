// recuerden como hemos puesto "type": "module" podemos usar import
import express from "express";

const app = express();

// Esto esta creando la ruta en la raiz y luego vamos a recibir 2
//* request (recibimos) => Es la informacion que vamos recibir de quien haga la peticion
//* response (respondemos) => Es lo que vamos a responder al usuario
app.get("/", (request, response) => {
  // vamos a responder que cuando el usuario entre a la raiz esta respuesta
  // sea un json
  response.json({
    message: "Hola mundo",
  });
});

// Para poder ver esto desde un navegador vamos a habilitar un puerto
// de nuestro pc
app.listen(6001, () =>
  console.log("El servidor inicio en el puerto http://localhost:6001")
);
