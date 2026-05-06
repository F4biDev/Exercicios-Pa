const readline = require('readline-sync');

console.log("=== SISTEMA ESCOLAR ===\n");

const sistemaEscolar = {
    nomeDoAluno: "",
    notas: [],

    calcularMediaGeral: function() {
        let soma = 0;

        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }

        return soma / this.notas.length;
    }
};

sistemaEscolar.nomeDoAluno = readline.question("Digite o nome do aluno: ");

for (let i = 1; i <= 4; i++) {
    let nota = Number(readline.question(`Digite a ${i}ª nota: `));
    sistemaEscolar.notas.push(nota);
}

let media = sistemaEscolar.calcularMediaGeral();

console.log("\n=== RESULTADO ===");
console.log(`Aluno: ${sistemaEscolar.nomeDoAluno}`);
console.log(`Notas: ${sistemaEscolar.notas.join(", ")}`);
console.log(`Média: ${media.toFixed(2)}`);