const readline = require('readline-sync');

console.log("=== CÁLCULO DE ÁREA DE RETÂNGULOS ===\n");


const calcularAreaRetangulo = function(base, altura) {
    return base * altura;
};

for (let i = 1; i <= 5; i++) {
    console.log(`Retângulo ${i}`);

    let valores = [];

    for (let j = 0; j < 2; j++) {
        if (j === 0) {
            valores.push(Number(readline.question("Digite a base: ")));
        } else {
            valores.push(Number(readline.question("Digite a altura: ")));
        }
    }

    let area = calcularAreaRetangulo(valores[0], valores[1]);

    console.log(`Base: ${valores[0]}`);
    console.log(`Altura: ${valores[1]}`);
    console.log(`Área: ${area}`);
    console.log("----------------------------------\n");
}