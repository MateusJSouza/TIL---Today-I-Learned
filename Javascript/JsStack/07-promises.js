const apiCall = new Promise((resolve, reject) => {
  // Após um segundo, o timeout executa a função resolve
  setTimeout(() => {
    resolve('Sucesso!');
    // reject('Erro!');
  }, 1000);
})

apiCall
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error);
  });

// Função assíncrona
async function run() {
  try {
    const resposta = await apiCall;
    console.log(resposta);
  } catch (error) {
    console.log(error);
  }
}

run();