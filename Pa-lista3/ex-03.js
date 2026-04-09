let input = require("readline-sync")
let numero = input.questionInt ("digite um numero:")
let resposta = (numero - 10)
if (resposta > 3) {
    console.log("A resposta é = " + resposta)
}