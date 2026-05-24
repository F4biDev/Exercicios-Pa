//5. Contar Ocorrências
//Crie uma função que receba um array e retorne um objeto mostrando quantas vezes cada elemento aparece.

let frutas = ["maçã", "banana", "maçã", "uva", "banana", "maçã"];

function contarOcorrencias(frutas) {

    let contagem = {};

    for (let i = 0; i < frutas.length; i++) {

        let elemento = frutas[i];

        if (contagem[elemento]) {

            contagem[elemento]++;

        } else {

            contagem[elemento] = 1;

        }
    }

    return contagem;
}

console.log(contarOcorrencias(frutas));