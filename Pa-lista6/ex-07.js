let input = require("readline-sync")
let numero1 = 0
let numero2 = 0

while (numero1 <= 10 || numero2 >= 5) {
    numero1 = input.questionInt("Digite um numero maior que 10: ")
    numero2 = input.questionInt("Digite um numero menor que 5: ")
}
console.log(numero1, numero2)