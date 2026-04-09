let input = require("readline-sync")
let numero1 = input.questionInt("Digite o primeiro numero: ")
let numero2 = input.questionInt("Digite o segundo numero: ")
let numero3 = input.questionInt("Digite o terceiro numero: ")
let menor = numero1
if (numero2 < menor) {
    menor = numero2
}
if (numero3 < menor) {
    menor = numero3
}
menor = menor + 5
console.log("Resultado = " + menor)