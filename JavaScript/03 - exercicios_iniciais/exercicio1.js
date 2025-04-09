//1.Faça um algoritmo que dado as 3 notas tiradas por um aluno em u semestre de faculdade calcule e imprima a media
// e a sua classificação conforme a tabela abaixo:

//Classificação:

// - Media menor que 5, reprovação;
// - Media entre 5 e 7, recuperação;
// - Media acima de 7, aprovado;

const nota1 = 1;
const nota2 = 2;
const nota3 = 3;

const media = (nota1 + nota2 + nota3) / 3;

if (media>=7){
    console.log("Aprovado com média: " + media.toFixed(2));

}else if(media>=5 && media<7){
    console.log("Recuperação com média: " + media.toFixed(2));

}else{
    console.log("Reprovado com média: " + media.toFixed(2));
}