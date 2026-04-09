let input = require("readline-sync")
let numero1 = input.questionInt("Digite o primeiro numero: ")
let numero2 = input.questionInt("Digite o segundo numero: ")
let menor, maior
let resultado = menor + maior
if (numero1 < numero2) {
    menor = numero1
    maior = numero2
} else {
    menor = numero2
    maior = numero1
}
menor = menor * 10
maior = maior / 2

if (resultado % 2 === 0) {
    console.log("O resultado é par")
} else {
    console.log("O resultado é impar")
}