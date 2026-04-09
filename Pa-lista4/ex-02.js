let input = require("readline-sync")
let numero1 = input.questionInt("Digite o primeiro numero: ")
let numero2 = input.questionInt("Digite o segundo numero: ")
if (numero1 < numero2) {
    numero1 = numero1 + 5
} else {
    numero2 = numero2 + 5
}
if (numero1 > numero2) {
    console.log("Maior = " + numero1)
} else {
    console.log("Maior = " + numero2)
}