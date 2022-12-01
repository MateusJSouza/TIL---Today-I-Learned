const tech = 'Node.JS';
const array = ['Node.JS', 'React', 'Typescript'];

const includes = tech.includes('Node.JS');

// Ele vai procurar a posição que tem o valor que passamos aqui no includes
const includesArray = array.includes('React Native'); // false

console.log({ includesArray });

console.log({ includes }); // retorna true ou false de acordo com o match
