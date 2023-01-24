const http = require('http');
const { URL } = require('url'); // WHATWG URL API substitui o url.parse

const routes = require('./routes')

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:3000${request.url}`);

  console.log(`Request Method: ${request.method} | Endpoint: ${parsedUrl.pathname}`);

  const route = routes.find((routeObj) => (
    routeObj.endpoint === parsedUrl.pathname && routeObj.method === request.method
  ))

  if (route) {
    // Object.fromEntries -> transforma em um objeto javascript
    request.query = Object.fromEntries(parsedUrl.searchParams)
    route.handler(request, response)
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`); 
  }
});

server.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));