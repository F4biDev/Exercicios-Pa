let input = require("readline-sync")
let numero1 = input.questionInt("Digite o primeiro numero: ")
let numero2 = input.questionInt("Digite o segundo numero: ")
if (numero1 < numero2) {
    console.log("Menor = " + numero1)
} else {
    console.log("Menor = " + numero2)
}