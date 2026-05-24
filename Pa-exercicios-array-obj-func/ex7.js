//7. Carrinho de Compras
//Crie um array com objetos de itens (nome, quantidade, preço). Crie uma função que calcule o valor total do carrinho.

let carrinho = [
    { nome: "Arroz", quantidade: 2, preco: 30 },
    { nome: "Feijão", quantidade: 2, preco: 20 },
    { nome: "Mistura", quantidade: 4, preco: 100 }
];

function calcularTotal(carrinho) {

    let total = 0;

    for (let i = 0; i < carrinho.length; i++) {

        total += carrinho[i].quantidade * carrinho[i].preco;

    }

    return total;
}

console.log(`Valor total do carrinho: R$${calcularTotal(carrinho)}`);