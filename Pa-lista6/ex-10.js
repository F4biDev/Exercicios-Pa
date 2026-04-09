let input = require("readline-sync")
let numero = input.questionInt("Digite um numero entre 5 e 10: ")

while (numero < 5 || numero > 10) {
    numero = input.questionInt("Valor invalido: ")
}
console.log(numero)