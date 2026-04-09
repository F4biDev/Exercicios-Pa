let input = require("readline-sync")
let numero1 = input.questionInt ("digite o primeiro numero:")
let numero2 = input.questionInt ("digite o segundo numero:")
let numero3 = input.questionInt ("digite o terceiro numero:")
let resposta1 = (numero1 + 5)
let resposta2 = (numero2 + 5)
let resposta3 = (numero3 + 5)
if(resposta1 > 10){
    console.log("A peimeira resposta é:" + resposta1)
}
if(resposta2 > 10){
    console.log("A segunda resposta é:" + resposta2)
}
if(resposta3 > 10){
    console.log("A terceira resposta é:" + resposta3)
}