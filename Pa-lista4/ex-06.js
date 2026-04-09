let input = require("readline-sync")
let numero1 = input.questionInt("Digite o primeiro numero: ")
let numero2 = input.questionInt("Digite o segundo numero: ")
if (numero1 < numero2) {
    console.log(numero1 + ", " + numero2)
} else {
    console.log(numero2 + ", " + numero1)
}