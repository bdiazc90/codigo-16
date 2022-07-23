# Semana 8 / Dia3

## Arrow function

```js
 const arrowFunction = async () => {};
```

## Destructuring

```js

const data = {
  total: 100,
  entries: [],
};

const { total, entries } = data;
```

## Async/Await

```js
async function getMovies() {
  try {
    const response = await fetch(urlMovies);
    - tiene 2 key
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
}
```

## forEach async

Nota: Esto aplica para ```map, filter, find, etc```

```js
movies.forEach(async (movie) => {
  const response = await fetch(movie.url);
  const data = await response.json();
  console.log(data);
});

```

## Response OK

- Todo response tiene siempre el ok, este tiene 2 valores: true o false

```js
const response = await fetch(url);

console.log(response.ok); - true | false
```

- Recuerden si la peticion es correcta retorn ```true``` si es incorrecta retorna ```false```

### Rutas 

- vamos a crear una ruta
- ruta: Es el lugar donde vamos a ver nuestro resultado
- La url de falabela
- https:-www.falabella.com.pe/falabella-pe
- Esta es la ruta /falabella-pe
- "/falabella-pe/category/cat780520/Accesorios-TV"
- "/falabella-pe/myaccount/registration"

- facebook.com
- cuando entremos a un dominio y este no tenga algun ruta se entiende
- que es la raiz por ende la ruta sera "/"

- youtube.com
- ruta: /

- codigotecsup.com
- ruta: /

- codigotecsup.com/login
- ruta: /login

- codigotecsup.com/curso/js
- ruta: /curso/js

### Node

```js
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
```

### Node - express - port

```js
// Para poder ver esto desde un navegador vamos a habilitar un puerto
// de nuestro pc
app.listen(6001, () =>
  console.log("El servidor inicio en el puerto http://localhost:6001")
);
```
