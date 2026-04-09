let input = require("readline-sync")
let numero = input.questionInt ("digite um numero:")
let resposta = (numero + 5)
if (resposta > 10){
    console.log("O Resultado é = " + resposta)
}
