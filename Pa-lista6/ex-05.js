let input = require("readline-sync")
let numero1 = input.questionInt("Digite o primeiro numero: ")
let numero2 = input.questionInt("Digite o segundo numero: ")
let numero3 = input.questionInt("Digite o terceiro numero: ")
let maior1 = numero1
let maior2 = numero2

if (numero2 > maior1) {
    maior1 = numero2
    maior2 = numero1
}

if (numero3 > maior1) {
    maior2 = maior1
    maior1 = numero3
} else if (numero3 > maior2) {
    maior2 = numero3
}

let i = maior2

while (i <= maior1) {
    console.log(i)
    i = i + 1
}