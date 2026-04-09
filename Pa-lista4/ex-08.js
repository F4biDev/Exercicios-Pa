let input = require("readline-sync")
let numero = input.questionInt("Digite um numero: ")
if (numero > 10) {
    numero = numero + 5
} else {
    numero = numero + 20
}
if (numero > 25) {
    console.log("Maior que 25")
} else {
    console.log("Menor ou igual a 25")
}