/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustível,
    nos diga o valor do gasto com combustível daquele carro.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;


    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
}

    calcularGasto(distancia, precoCombustivel) {
        return (distancia * this.gastoMedioPorKm) * precoCombustivel;
}
}


const uno = new Carro("Fiat", "preto",1/12);
const palio = new Carro("Palio","Branco",1/10)
gastoTotal = uno.calcularGasto(70, 5);

console.log(uno);

console.log(gastoTotal.toFixed(2));
