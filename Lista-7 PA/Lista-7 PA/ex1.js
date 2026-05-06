// Exercício 1 - Ler 4 notas e mostrar média + notas usando só 1 laço
// Equivalente ao exemplo09, mas com apenas 1 estrutura de repetição
const readline = require('readline-sync');

let notas = [];
let media = 0;
let i = 0;

console.log("=== DIGITE AS 4 NOTAS DO ALUNO ===");

// Único while que faz tudo: lê, soma e depois mostra
while (i < 8) {
    if (i < 4) {
        // Primeira metade: i = 0,1,2,3 -> lê as notas
        let nota = Number(readline.question(`Digite a ${i + 1}ª nota: `));
        notas[i] = nota;
        media = media + nota;
    } else {
        // Segunda metade: i = 4,5,6,7 -> mostra as notas
        if (i === 4) {
            media = media / 4; // calcula a média antes de mostrar
            console.log(`\nMédia: ${media.toFixed(2)}`);
            console.log("Notas digitadas:");
        }
        console.log(`Nota ${i - 3}: ${notas[i - 4]}`);
    }
    i++;
}