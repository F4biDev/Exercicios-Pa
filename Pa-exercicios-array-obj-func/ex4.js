const readline = require("readline-sync")
//4. Busca de Nome
//Crie um array com nomes. Crie uma função que receba um nome e retorne se ele existe no array.

let nomes = ["Romeu", "Pantera", "Fabiana", "Estrela"];

function buscarNome(nomeProcurado) {

    for (let i = 0; i < nomes.length; i++) {

        if (nomes[i] === nomeProcurado) {

            return "Nome encontrado!";
        }
    }

    return "Nome não encontrado!";
}

console.log(buscarNome("Pantera"));