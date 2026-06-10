// ex9
function filtrarAprovados(listaDeProvas) {
    for (let i = 0; i < listaDeProvas.length; i++) {
      if (listaDeProvas[i].notaTirada >= 6.0) {
        console.log(listaDeProvas[i].disciplina);
      }
    }
  }
  
  filtrarAprovados(listaDeProvas);





  // ex10
  const sistemaEscolar = {
    nomeDoAluno: "Carlos",
    notas: [7.5, 8.0, 6.5, 9.0],
  
    calcularMediaGeral() {
      let soma = 0;
  
      for (let i = 0; i < this.notas.length; i++) {
        soma += this.notas[i];
      }
  
      return soma / this.notas.length;
    }
  };
  
  console.log(sistemaEscolar.calcularMediaGeral());