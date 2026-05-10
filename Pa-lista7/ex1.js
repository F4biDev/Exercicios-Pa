
const readline = require('readline-sync');

let notas = [];
let media = 0;
let i = 0;

    console.log("=== DIGITE AS 4 NOTAS DO ALUNO ===");

    while (i < 8) {
    if (i < 4) {
        // Primeira metade: i = 0,1,2,3 -> lê as notas
        let nota = Number(readline.question(`Digite a ${i + 1}ª nota: `));
        notas[i] = nota;
        media = media + nota;
    } else {
 
        if (i === 4) {
            media = media / 4;
            console.log(`\nMédia: ${media.toFixed(2)}`);
            console.log("Notas digitadas:");
        }
        console.log(`Nota ${i - 3}: ${notas[i - 4]}`);
    }
    i++;
}