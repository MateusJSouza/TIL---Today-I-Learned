/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
  {
      category: "Riqueza",
      books: [
          {
              title: "Os segredos da mente milionária",
              author: "T. Harv Eker",
          },
          {
              title: "O homem mais rico da Babilônia",
              author: "George S. Clason",
          },
          {
              title: "Pai rico, pai pobre",
              author: "Robert T. Kiyosaki e Sharon L. Lechter",
          },
      ],
  },
  {
      category: "Inteligência Emocional",
      books: [
          {
              title: "Você é Insubstituível",
              author: "Augusto Cury",
          },
          {
              title: "Ansiedade – Como enfrentar o mal do século",
              author: "Augusto Cury",
          },
          {
              title: "Os 7 hábitos das pessoas altamente eficazes",
              author: "Stephen R. Covey",
          },
      ],
  },
];

// Contando o número total de categorias
const totalCategories = booksByCategory.length

// Contando o número tatal de livros e o número total de categorias da categoria
console.log('Total de categorias:', totalCategories)
for (let category of booksByCategory) {
  console.log('Total de livros da categoria:', category.category)
  console.log(category.books.length) // total de livros na categoria
}

// Contando o número de autores
function countAuthors() {
  let authors = [];

  // Pegando as categorias
  for (let category of booksByCategory) {
    // Pegando os livros
    for (let book of category.books) {
      // verificando se dentro do array tem algum autor do livro
      // caso ele não esteja, ou seja, (-1) ele será adicionado no array
      if (authors.indexOf(book.author) === -1) {
        authors.push(book.author);
      }
    }
  }

  console.log("Total de autores:", authors.length)
}

countAuthors()

// Contando o número total de livros do Augusto Cury
function booksOfAugustoCury() {
  let books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      // Se o autor do livro for igual a "Augusto Cury"
      if (book.author === "Augusto Cury") {
        // Adicionado no no fim do array os livros do autor Augusto Cury
        books.push(book.title)
      }
    }
  }

  console.log("Livros do autor:", books)
}

booksOfAugustoCury()

// Função que irá receber o nome do autor e devolver os livros desse autor
function booksOfAuthor(author) {
  let books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title)
      }
    }
  }
  
  console.log(`Livros do ${author}: ${books.join(", ")}`);
}

booksOfAuthor('George S. Clason')