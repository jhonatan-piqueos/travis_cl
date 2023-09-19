const express = require('express');
const app = express();
const puerto = 3000;

app.get('/', (req, res) => {
  res.send('<h1>¡Hola Mundo!</h1>');
});

app.listen(puerto, () => {
  console.log(`Servidor Express escuchando en el puerto ${puerto}`);
});