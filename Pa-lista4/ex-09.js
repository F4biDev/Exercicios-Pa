let input = require("readline-sync")
let numero1 = input.questionInt("Digite o primeiro numero: ")
let numero2 = input.questionInt("Digite o segundo numero: ")
let numero3 = input.questionInt("Digite o terceiro numero: ")
let numero4 = input.questionInt("Digite o quarto numero: ")
let resultado = (numero1 + numero2) + (numero3 - numero4)
if (resultado > 10) {
    console.log("Resultado maior que dez")
} else {
    console.log("Resultado menor ou igual a dez")
}