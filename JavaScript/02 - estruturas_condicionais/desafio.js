//FAÇA UM PROGRAMA PARA CALCULAR O VALOR DE UMA VIAGEM.

//Você terá 3 variáveis, sendo elas:
//1 - Preço do etanol;
//2 - Preço da gasolina;
//3 - O tipo de combustível que está no seu carro (gasolina ou etanol);
//4 - Gasto médio do carro na cidade (km/l);
//5 - Distância em km da viagem;

//Imprima no console o valor que será gasto para realizar esta viagem.

const precoEtanol = 5;
const precoGasolina = 7;
const tipoCombustivel = "etanol";
const gastoMedio = 10; 
const distancia = 100;    

if (tipoCombustivel === "gasolina"){
    let valorGasto = (distancia/gastoMedio) * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

else if (tipoCombustivel === "etanol"){
    let valorGasto = (distancia/gastoMedio) * precoEtanol;
    console.log(valorGasto.toFixed(2));
}

else{
    console.log("Combustível inválido.");
}