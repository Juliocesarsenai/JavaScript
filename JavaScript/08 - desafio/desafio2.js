const {gets , print} = require('./funcoes_desafio')

const numeros = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = null;


    for(let i = 0;i < numeros; i++){
        const numero = Number(gets());
        if (numero % 2 === 0){
            if (maiorNumeroPar === null || numero > maiorNumeroPar){
                maiorNumeroPar = numero;
            }

        } else {
            if (menorNumeroImpar === null || numero < menorNumeroImpar){
                menorNumeroImpar = numero;
            }
            }
            }

print("Maior número par: " + maiorNumeroPar);
print("Menor número ímpar: " + menorNumeroImpar);























