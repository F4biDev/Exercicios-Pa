
//8. Filtrar Pessoas
//Crie um array de objetos contendo nome e idade. Crie uma função que retorne apenas as pessoas com mais de 18 anos.

let pessoas = [
    {nome: "Izabella", idade: 13},
    {nome: "Fabiana", idade: 18},
    {nome: "Priscila", idade: 30},
    {nome: "Jose", idade: 36}
];

function filtrarPessoas(pessoas) {

    return pessoas.filter(pessoas => pessoas.idade > 18);

}

console.log(filtrarPessoas(pessoas));


