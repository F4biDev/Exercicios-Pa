const readline = require("readline-sync")

//3. Média de Notas
//Crie uma função que receba um array de números representando notas e retorne a média final.

let notas = [10, 8, 9, 7]

function calcularMedia(notas) {
let soma = 0;
    for (let i = 0; i < notas.length; i++) {
    
        soma += notas[i];

    }

    let media = soma / notas.length;
    return media;
}

console.log(`A média final é ${calcularMedia(notas)}`);