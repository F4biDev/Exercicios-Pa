let input = require("readline-sync")
let numero1 = input.questionInt ("digite o primeiro numero:")
let numero2 = input.questionInt ("digite o segundo numero:")
let numero3 = input.questionInt ("digite o terceiro numero:")
let resposta = (numero1 + numero2 + numero3)
if (resposta > 20){
    console.log("O resultado é: " + resposta)
}