function aplicarDesconto(valor,desconto){
    return (valor - (valor * desconto));
}

function aplicarJuros(valor,juros){
    return (valor + (valor * juros));
}

function calcularPreco(precoEtiqueta,formaPagamento){
    
    if (formaPagamento === 1){
       console.log(aplicarDesconto(precoEtiqueta,0.1));

    } else if (formaPagamento === 2){
        console.log(aplicarDesconto(precoEtiqueta,0.15));

    } else if (formaPagamento === 3){
       console.log(precoEtiqueta);
   
    }else{
        console.log(aplicarJuros(precoEtiqueta,0.1));
    } 

}

precoTotal = calcularPreco(100,4);

console.log("Gasto Total: " + precoTotal.toFixed(2));
