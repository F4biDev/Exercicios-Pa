let input = require("readline-sync")
let numero = input.questionInt("Digite um numero: ")
let i = 1

while (i <= 10) {
    console.log(numero + " x " + i + " = " + (numero * i))
    i = i + 1
}
