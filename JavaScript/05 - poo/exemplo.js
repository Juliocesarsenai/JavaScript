class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025-idade;
    }

   descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }   

}

function compararPessoas(p1,p2){

    if (p1.idade === p2.idade){
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    
    } else if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    
    } else if (p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    
    }else{
        console.log(`${p1.nome} e ${p2.nome} não tem a mesma idade`);
    }

}

const julio = new Pessoa("Júlio",20);
const guilherme = new Pessoa("Guilherme",21);

compararPessoas(julio,guilherme);