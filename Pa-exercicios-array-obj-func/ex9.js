//9. Sistema de Caixa Eletrônico
//Crie um objeto representando uma conta com agência, número da conta, senha, saldo e histórico de operações. Crie um sistema com as funções:
//validar acesso (recebe agência, conta e senha)
//exibir saldo
//realizar saque (somente se houver saldo)
//No saque, exiba a quantidade de cédulas entregues usando as notas: 100, 50, 20 e 10, utilizando o menor número possível de cédulas

const conta = {
    agencia: "0001",
    numero: "456789",
    senha:"5008",
    saldo:"1000",
    historico:[]
};

function validarAcesso(agencia, numero, senha){
    if (agencia===conta.agencia &&
        numero===conta.numero &&
        senha===conta.senha

    )
    {
        return true;

    } else{
        return false;
    }
}

function exibirSaldo(){
    console.log("/n0 valor deve ser multiplo de 10");
    return;
}

function realizarSaque(valor){
if (valor > conta.saldo){
    console.log("/nsaldo insuficiente");
    return;
}
if(valor % 10 !== 0){ console.log("/n0 valor deve ser multiplo de 10");
    return;
}   
}
conta.saldo -= valor;
let restante=valor;
let notas 100 =  
