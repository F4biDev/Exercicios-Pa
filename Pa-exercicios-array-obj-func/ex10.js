//10. Ranking de Pontuação Crie um array de objetos representando jogadores com nome e pontos. Crie uma função que retorne o array ordenado do maior para o menor ponto.

let jogadores = [
    { nome: "Bruno", pontos: 150 },
    { nome: "Guilherme", pontos: 200 },
    { nome: "Lucas", pontos: 300 }
];

function ranking(jogadores) {

    return jogadores.sort((a, b) => b.pontos - a.pontos);

}

console.log(ranking(jogadores));