let input = require("readline-sync")
let numero1 = input.questionInt("Digite o primeiro numero: ")
let numero2 = input.questionInt("Digite o segundo numero: ")
let numero3 = input.questionInt("Digite o terceiro numero: ")
let maior = numero1
if (numero2 > maior) {
    maior = numero2
}
if (numero3 > maior) {
    maior = numero3
}
console.log("Maior = " + maior)