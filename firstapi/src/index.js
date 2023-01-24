const http = require('http');
const { URL } = require('url'); // WHATWG URL API substitui o url.parse
const bodyParser = require('./helpers/bodyParser');

const routes = require('./routes')

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:3000${request.url}`);

  console.log(`Request Method: ${request.method} | Endpoint: ${parsedUrl.pathname}`);

  let { pathname } = parsedUrl;
  let id = null;

  // Dividingo a string transformando-a em um array
  const splitEndpoint = pathname.split('/').filter(Boolean);
  
  // Se encontrou algum id
  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`;
    id = splitEndpoint[1];
  }

  const route = routes.find((routeObj) => (
    routeObj.endpoint === pathname && routeObj.method === request.method
  ))

  if (route) {
    // Object.fromEntries -> transforma em um objeto javascript
    request.query = Object.fromEntries(parsedUrl.searchParams)
    request.params = { id };

    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(body));
    }

    // Includes -> verifica se uma informação está dentro deste array, no caso, se POST ou PUT existem no request.method
    if (['POST', 'POST, PATCH'].includes(request.method)) {
      bodyParser(request, () => route.handler(request, response));
    } else {
      route.handler(request, response)
    }

  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`); 
  }
});

server.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));