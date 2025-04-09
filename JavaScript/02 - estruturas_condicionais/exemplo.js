const numero = 0;
 
const numPar  = numero % 2 === 0;
const numImpar = numero % 2 !== 0;

if (numero === 0){
    console.log("O número é inválido.");
}

else if (numPar) {
    console.log("O número é par.");
}       

else {
    console.log("O número é ímpar.");
}

