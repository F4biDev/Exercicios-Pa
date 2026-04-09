let input = require("readline-sync")
let numero = input.questionInt ("digite um numero:")
let resposta = (numero * 3)
if (resposta > 15){
    console.log("O resultado é :" + resposta)
}