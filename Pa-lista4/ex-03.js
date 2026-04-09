let input = require("readline-sync")
let numero = input.questionInt("Digite um numero: ")
if (numero > 10) {
    console.log("Numero maior que dez")
} else {
    console.log("Numero menor ou igual a dez")
}