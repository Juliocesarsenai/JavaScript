/*
3.Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo devido.
Código Condição de pagamento:
-- 1 à vista em dinheiro ou cheque, recebe 10% de desconto
-- 2 à vista no cartão de crédito, recebe 15% de desconto
-- 3 Em duas vezes , preço normal da etiqueta sem juros
-- 4 Acima de duas vezes, preço normal da etiqueta mais juros de 10%

*/

const precoEtiqueta = 100;
const formaPagamento = 1;

if (formaPagamento === 1){
    console.log(precoEtiqueta * 0.9);
} else if (formaPagamento === 2){
    console.log(precoEtiqueta * 0.85);
} else if (formaPagamento === 3){
    console.log(precoEtiqueta);
}else{
    console.log(precoEtiqueta * 1.10);
} 


