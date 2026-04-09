let input = require("readline-sync")
let numero = input.questionInt("Digite um numero menor que 5: ")

while (numero >= 5) {
    numero = input.questionInt("Valor invalido: ")
}
while (numero <= 20) {
    if (numero % 2 === 0) {
        console.log(numero)
    }
    numero = numero + 1
}