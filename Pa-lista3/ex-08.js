let input = require("readline-sync")
let numero1 = input.questionInt ("digite o primeiro numero:")
let numero2 = input.questionInt ("digite o segundo numero:")
if(numero1 == numero2){
    console.log("O primeiro numero é:" + numero1)
    console.log("O segundo numero é:" + numero2)
}