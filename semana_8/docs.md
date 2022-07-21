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

console.log(response.ok); // true | false
```

- Recuerden si la peticion es correcta retorn ```true``` si es incorrecta retorna ```false```
