

//5.
let elevarAoQuadrado = (x) => x * x
console.log("exercicio 5( 7 ao quadrado):", elevarAoQuadrado(7));

//6.

function gerarRelatorio(nomeAluno, status = "Pendente") {
    console.log(`Relatório do aluno ${nomeAluno} está ${status}`);
}

console.log("Exercicio 6:")
gerarRelatorio("Fabiana")
gerarRelatorio("Fabi", "Concluido")

//7.

let historicoMatematico = {
    operacoes: "Soma",
    valoresParticipantes:[5, 10, 15]
};


//8.

let listaDeProvas=[
    {
        diciplina:"Logica de Programação",
        notaTirada:10
    },

    {
        diciplina:"Desenvolvimento Web",
        notaTirada:8.4
    },

    {
        diciplina:"Estrutura de Dados",
        notaTirada:6.4
    },
]

console.log(`- ${provas[i].diciplina} (Nota: ${provas[i].notaTirada})`);




//9.
let listadeProvas = [  

];

function filtrarAprovados(provas){
for(let i = 0; i<provas.lenght; i++) {
    if (provas[i].notaTirada>7.0) {
    console.log(`- ${provas[i].diciplina} (Nota: ${provas[i].notaTirada})`);
    }
}
}

//10.

let sistemaEscolar = {
    nomedoAluno:"Alessandro",
    notas:[8.0,9.5,7.5,10],
    calcularMediaGeral:()=>{
        let soma = 0;
        for (let i = 0; i < this.notas.lenght; i++) {
            soma+=this.notas[i]
        }

        const media = soma / this.notas.lenght
        return media
    }
}
//testando ex. 10:
console.log("Exercicio 10:")
const mediaFinal = sistemaEscolar.calcularMediaGeral();
console.log(`A média final do aluno ${sistemaEscolar.nomedoAluno} é: ${mediaFinal}`)