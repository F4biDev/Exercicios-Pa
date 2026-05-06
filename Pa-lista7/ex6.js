const readline = require('readline-sync');

console.log("=== GERADOR DE RELATÓRIOS ===\n");

function gerarRelatorio(nomeAluno, status = "Pendente") {
    console.log(`Relatório do aluno ${nomeAluno} está ${status}`);
    console.log("----------------------------------\n");
}

for (let i = 1; i <= 5; i++) {
    let nome = readline.question(`Nome do ${i}º aluno: `);
    
    let resposta = readline.question("Deseja informar o status? (s/n): ").toLowerCase();

    if (resposta === "s") {
        let status = readline.question("Digite o status: ");
        gerarRelatorio(nome, status);
    } else {
        gerarRelatorio(nome);
    }
}