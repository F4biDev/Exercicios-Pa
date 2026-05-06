const readline = require('readline-sync');

console.log("=== LISTA DE PROVAS ===\n");

let listaDeProvas = [];

for (let i = 1; i <= 3; i++) {
    console.log(`Prova ${i}:`);

    let disciplina = readline.question("Digite a disciplina: ");
    let nota = Number(readline.question("Digite a nota: "));

    listaDeProvas.push({
        disciplina: disciplina,
        notaTirada: nota
    });

    console.log("--------------------------\n");
}

function filtrarAprovados(lista) {
    console.log("\n=== DISCIPLINAS APROVADAS ===");

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].notaTirada >= 6) {
            console.log(lista[i].disciplina);
        }
    }
}

filtrarAprovados(listaDeProvas);