/*
2. O IMC (Índice de Massa Corporal) é um critério da Organização Mundial de Saúde para calcular o peso ideal de uma pessoa é um critério da Organização Mundial de Saúde para calcular o peso ideal de uma pessoa.
O IMC é calculado dividindo o peso da pessoa pela altura da pessoa elevada ao quadrado.
Faça um algoritmo que calcule o IMC de uma pessoa e imprima o resultado, classificando-a em uma das categorias abaixo:

- Abaixo do peso: IMC menor que 18,5
- Peso normal: IMC entre 18,5 e 24,9
- Sobrepeso: IMC entre 25 e 29,9
- Obesidade grau I: IMC entre 30 e 34,9
- Obesidade grau II: IMC entre 35 e 39,9
- Obesidade grau III: IMC maior que 40
*/


let peso = 70;
let altura = 1.74;
let imc = peso / (altura * altura); 

console.log("IMC: " + imc.toFixed(2)); // toFixed(2) para limitar a 2 casas decimais

if (imc < 18.5) {
    console.log("Abaixo do peso");
}
else if(imc >= 18.5 && imc < 24.9) {
    console.log("Peso normal");
}
else if(imc >= 25 && imc < 29.9) {
    console.log("Sobrepeso");
}
else if(imc >= 30 && imc < 34.9) {
    console.log("Obesidade grau I");
}
else if(imc >= 35 && imc < 39.9) {
    console.log("Obesidade grau II");
}

else {
    console.log("Obesidade grau III");
}
