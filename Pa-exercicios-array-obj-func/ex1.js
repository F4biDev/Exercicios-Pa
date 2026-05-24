const readline = require("readline-sync");

//1. Cadastro de Aluno
//Crie um objeto que represente um aluno com nome, idade e curso. Crie uma função que receba esse objeto e retorne uma frase apresentando o aluno.

let aluno = {
       nome: "Fabiana",
       idade:"18",
       curso:"Desenvolvimento de Sistemas"
    };

    function apresentarAluno(aluno) {
        return (`O aluno ${aluno.nome} tem ${aluno.idade} anos e faz o curso de ${aluno.curso}.`)
    }

    console.log(apresentarAluno(aluno));