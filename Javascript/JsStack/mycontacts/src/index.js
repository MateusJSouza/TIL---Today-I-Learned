const express = require('express');

const routes = require('./routes');

const app = express();

app.use(routes);

app.listen(3001, () => console.log('🔥 Server started at http://localhost:3001'));

/*
  Para utilizarmos o nodemon, basta digitar no terminal o seguinte comando:
  npx nodemon src/index.js (ou seja, o caminho da aplicação)
*/
