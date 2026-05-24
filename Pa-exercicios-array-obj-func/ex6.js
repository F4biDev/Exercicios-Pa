//6.Biblioteca
//Crie um array de objetos representando livros com título, autor e ano. Crie uma função que retorne apenas os livros publicados depois de 2010.

let livros = [
    { titulo: "A Revolução dos Animais", autor: "George Orwell", ano: 1945 },
    { titulo: "Harry Potter", autor: "J.K Rowling", ano: 2012 },
    { titulo: "Percy Jackson", autor: "Rick Riordan", ano: 2011 },
    { titulo: "A hora da estrela", autor: "Clarice Lispector", ano: 1977 }
];

function filtrarLivros(livros) {

    return livros.filter(livros => livros.ano > 2010);

}

console.log(filtrarLivros(livros));