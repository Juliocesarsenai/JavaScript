/*
const {gets,print} = require("./funcoes_auxiliares")

const numerosSorteados = [];

*for(let i = 0; i < 5; i++){
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for(let i = 0; i < numerosSorteados.length; i++){
    const numeroSorteado = numerosSorteados[i]; 
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

print(numerosSorteados);
print("Maior Valor: " + maiorValor);


*/

const {gets,print} = require("./funcoes_auxiliares")

const entradas = gets(); 
let maiorValor = 0;

for(let i = 0; i < entradas; i++){
    const numeroSorteado = gets(); 
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

print("Maior Valor: " + maiorValor);
