const {gets , print} = require('./funcoes_desafio')

const valorSalarioBruto = gets();
const valorAdicionalDosBeneficios = gets();

function calcularPorcentagem(valor,percentual){
    return valor * (percentual/100) ;
}

function pegarAliquota(salario){

    if (salario >= 0.00 && salario < 1100.00){
        return 5.00;
    } else if (salario >= 1100.01 && salario <= 2500){
        return 10;
    } else { 
        return 15;
    }
    
    
}
const aliquotaImposto = pegarAliquota(valorSalarioBruto);
const valorImposto =  calcularPorcentagem(valorSalarioBruto,aliquotaImposto);

const valorATransferir = valorSalarioBruto - valorImposto + valorAdicionalDosBeneficios;

print(valorATransferir);