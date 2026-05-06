// Ex 3 - Médias de 5 alunos com readline-sync
const readline = require('readline-sync');

console.log("=== CALCULO DE MÉDIAS ===\n");

for (let aluno = 1; aluno <= 5; aluno++) {
    let nome = readline.question(`Nome do ${aluno}º aluno: `);
    let somaNotas = 0;
    let listaNotas = [];

    for (let nota = 1; nota <= 4; nota++) {
        let valorNota = Number(readline.question(`Digite a ${nota}ª nota: `));
        listaNotas.push(valorNota);
        somaNotas += valorNota;
    }

    let media = somaNotas / 4;
    console.log(`\nAluno: ${nome}`);
    console.log(`Notas: ${listaNotas.join(", ")}`);
    console.log(`Média: ${media.toFixed(1)}`);
    console.log(`Situação: ${media >= 6 ? "Aprovado" : "Reprovado"}`);
    console.log("----------------------------------\n");
}