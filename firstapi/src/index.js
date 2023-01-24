const http = require('http');

const users = require('./mocks/users');

const server = http.createServer((request, response) => {
  console.log(`Request Method: ${request.method} | Endpoint: ${request.url}`);

  if (request.url === '/users' && request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(users)); // convertendo o array em string com o JSON.stringfy
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(`Cannot ${request.method} ${request.url}`); 
  }
});

server.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));