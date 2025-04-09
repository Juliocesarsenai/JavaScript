/*

2)Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
A pessoa deve ter um método calcularIMC que irá calcular o IMC e retornar uma string com os seguintes valores:

*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return this.peso/(this.altura)**2;
        
    }

    classificarIMC(){
        if (this.calcularIMC() < 18.5){
            return `${this.nome} está abaixo do peso \n`;
        }
        else if (this.calcularIMC() >= 18.5 && this.calcularIMC() < 25){
            return `${this.nome} está com peso normal \n`;
        }
        else if (this.calcularIMC() >= 25 && this.calcularIMC() < 30){
            return `${this.nome} está acima do peso \n`;
        }
        else if (this.calcularIMC() >= 30 && this.calcularIMC() < 35){
            return `${this.nome} está com obesidade grau I \n`;
        }
        else if (this.calcularIMC() >= 35 && this.calcularIMC() < 40){
            return `${this.nome} está com obesidade grau II \n`;
        }
        else{
            return `${this.nome} está com obesidade grau III \n`;
        }
    }
}

const julio = new Pessoa("Júlio", 70, 1.74);
const henrique = new Pessoa("Henrique", 69, 1.68);
const duda = new Pessoa("Duda", 50, 1.68);

console.log(julio.nome);
console.log(julio.calcularIMC().toFixed(2));
console.log(julio.classificarIMC());


console.log(henrique.nome);
console.log(henrique.calcularIMC().toFixed(2));
console.log(henrique.classificarIMC());



console.log(duda.nome);
console.log(duda.calcularIMC().toFixed(2));
console.log(.classificarIMC());



