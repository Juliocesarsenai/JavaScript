const notas=[];

notas.push(5);
notas.push(2);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for(let i = 0; i < notas.length; i++){
    const nota = notas[i];
    soma += nota;
}

const media=soma/notas.length;
console.log(media.toFixed(2));



/* 

const nome = "Júlio César";
for(let i = 0; i < nome.length; i++){
    const letra = nome[i];
    console.log(letra);

    }*/
