let input = require("readline-sync")
let numero1 = input.questionInt("Digite o primeiro numero: ")
let numero2 = input.questionInt("Digite o segundo numero: ")
let inicio, fim

if (numero1 < numero2) {
    inicio = numero1
    fim = numero2
} else {
    inicio = numero2
    fim = numero1
}
while (inicio <= fim) {
    console.log(inicio)
    inicio = inicio + 1
}