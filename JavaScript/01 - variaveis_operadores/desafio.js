//Façaa um programa para calcular o valor de uma viagem
//Você terá 3 variávis. Sendo elas:

//1 - Preço de Combustível.
//2 - Gasto médio do combustível do carro por km.
//3 - Distância por km da viagem

//Imprima no console o valor que será gasto no combustivel para essa viagem

//Resolução

const valorCombustivel = 5.79;
const gastoMedio = 10;
const distanciaViagem = 100;

const gastoTotal = (distanciaViagem / gastoMedio) * valorCombustivel;

console.log(gastoTotal.toFixed(2))


