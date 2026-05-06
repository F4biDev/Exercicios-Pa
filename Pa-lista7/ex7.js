const readline = require('readline-sync');

console.log("=== HISTÓRICO MATEMÁTICO ===\n");

const historicoMatematico = {
    operacao: "",
    valoresParticipantes: []
};

historicoMatematico.operacao = readline.question("Digite a operação (ex: Soma): ");

for (let i = 1; i <= 3; i++) {
    let valor = Number(readline.question(`Digite o ${i}º valor: `));
    historicoMatematico.valoresParticipantes.push(valor);
}

console.log("\n=== RESULTADO ===");
console.log(`Operação: ${historicoMatematico.operacao}`);
console.log(`Valores: ${historicoMatematico.valoresParticipantes.join(", ")}`);