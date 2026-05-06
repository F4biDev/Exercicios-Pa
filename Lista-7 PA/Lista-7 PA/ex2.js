// Ex 2 - Ordenar 5 números com readline-sync
const readline = require('readline-sync');
const numeros = [];
let i = 0;

console.log("=== DIGITE 5 NÚMEROS ===");

// while pra ler
while (i < 5) {
    let num = Number(readline.question(`Digite o ${i + 1}º numero: `));
    numeros.push(num);
    i++;
}

// for pra ordenar com Bubble Sort
for (let x = 0; x < numeros.length; x++) {
    for (let y = 0; y < numeros.length - 1; y++) {
        if (numeros[y] > numeros[y + 1]) {
            let temp = numeros[y];
            numeros[y] = numeros[y + 1];
            numeros[y + 1] = temp;
        }
    }
}

console.log("\nOrdem crescente:", numeros.join(" - "));