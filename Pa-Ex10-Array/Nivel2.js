// ex4
const calcularAreaRetangulo = function(base, altura) {
    return base * altura;
  };
  
  console.log(calcularAreaRetangulo(5, 4)); // 20



// ex5
const elevarAoQuadrado = x => x * x;

console.log(elevarAoQuadrado(6)); // 36




//ex6
function gerarRelatorio(nomeAluno, status = "Pendente") {
    console.log(`Relatório do aluno ${nomeAluno} está ${status.toLowerCase()}`);
  }
  
  gerarRelatorio("Maria");
  gerarRelatorio("João", "Concluído");