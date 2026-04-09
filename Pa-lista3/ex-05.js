let input = require("readline-sync")
let numero1 = input.questionInt ("digite o primeiro numero:")
let numero2 = input.questionInt ("digite o segundo numero:")
let resposta1 = (numero1 * 10)
let resposta2 = (numero2 * 10)
if (numero1 + numero2 > 20){
    console.log("O primeiro resultado é : " + resposta1)
    console.log("O segundo resultado é : " + resposta2)
}