let input = require("readline-sync")
let numero = input.questionInt("Digite um numero maior que 20: ")

while (numero <= 20) {
    numero = input.questionInt("Valor invalido: ")
}
while (numero >= 1) {
    console.log(numero)
    numero = numero - 1
}