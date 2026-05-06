const readline = require('readline-sync');

console.log("=== LISTA DE PROVAS ===\n");

let listaDeProvas = [];

for (let i = 1; i <= 3; i++) {
    console.log(`Prova ${i}:`);

    let disciplina = readline.question("Digite a disciplina: ");
    let nota = Number(readline.question("Digite a nota: "));

    let prova = {
        disciplina: disciplina,
        notaTirada: nota
    };

    listaDeProvas.push(prova);
    console.log("--------------------------\n");
}
console.log("=== RESULTADO ===\n");

listaDeProvas.forEach(function(prova, index) {
    console.log(`Prova ${index + 1}`);
    console.log(`Disciplina: ${prova.disciplina}`);
    console.log(`Nota: ${prova.notaTirada}`);
    console.log("--------------------------");
});