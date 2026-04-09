let input = require("readline-sync")
let numero = input.questionInt("Digite um numero menor que 10: ")

while (numero >= 10) {
    numero = input.questionInt("Valor invalido: ")
}
console.log(numero)