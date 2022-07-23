// recuerden como hemos puesto "type": "module" podemos usar import
import express from "express";

const app = express();

// vamos a crear un arreglo que contega las tareas
const todoListArray = [];

app.get("/", (request, response) => {
  /**
   * total: 100
   * tasks: []
   */
  response.json({
    total: todoListArray.length,
    tasks: todoListArray,
  });
});

app.post("/create-task", (request, response) => {
  console.log(request);
});

app.listen(6001, () =>
  console.log("El servidor inicio en el puerto http://localhost:6001")
);
