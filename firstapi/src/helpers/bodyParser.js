function bodyParser(request, callback) {
  let body = '';

  request.on('data', (chunk) => {
    body += chunk;
  })
  
  request.on('end', () => {
    body = JSON.parse(body); // JSON.parse -> transforma a string em objeto
    request.body = body;
    callback();
  })
}

module.exports = bodyParser;