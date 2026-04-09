let input = require("readline-sync")
let numero1 = input.questionInt("Digite o primeiro numero: ")
let numero2 = input.questionInt("Digite o segundo numero: ")
let numero3 = input.questionInt("Digite o terceiro numero: ")
let troca
if (numero1 > numero2) {
    troca = numero1
    numero1 = numero2
    numero2 = troca
}
if (numero1 > numero3) {
    troca = numero1
    numero1 = numero3
    numero3 = temp
}
if (numero2 > numero3) {
    temp = numero2
    numero2 = numero3
    numero3 = troca
}
console.log(numero1 + ", " + numero2 + ", " + numero3)