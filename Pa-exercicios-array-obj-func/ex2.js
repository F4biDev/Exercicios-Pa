const readline = require("readline-sync");

//2. Lista de Produtos
//Crie um array contendo objetos de produtos com nome e preço. Crie uma função que receba o array e retorne apenas os produtos com preço acima de 50.


let produtos = [
    {nome: "Teclado", preco: 80},
    { nome: "Mouse", preco: 30},
    {nome: "Monitor", preco: 500},
    {nome: "Mouse-pad", preco: 20}

];

function filtrarProdutos(produtos) {
    return produtos.filter(produtos => produtos.preco > 50);
}

console.log(filtrarProdutos(produtos));