//let titulo = document.querySelector('h1');

//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p'); 
//paragrafo.innerHTML = "Escolha um número entre 1 e 10"; 

let listaDeNumerosSorteados = []; 
let numeroLimite = 100; 
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1; 

function exibirTextoNaTela(tag, texto){

    let campo = document.querySelector(tag); 
    campo.innerHTML = texto ;

}

function exibirMensagemInicial(){

    exibirTextoNaTela("h1", 'Jogo do número secreto');
    exibirTextoNaTela("p", "Escolha um número entre 1 e 100")

}

exibirMensagemInicial (); 

function verificarChute (){

    let chute = document.querySelector("input").value; 

    if (chute == numeroAleatorio) {
        let palvraTentativa = tentativas > 1 ? "tentativas" : "tentativa" ; 
        let mensagemTentativa = `Você descobriu o número secreto em ${tentativas} ${palvraTentativa}`;
        exibirTextoNaTela("h1", "Acertou !!");
        exibirTextoNaTela("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled")
    }
    else{
        if (chute > numeroAleatorio){
            exibirTextoNaTela("p", "O número secreto é menor");
        }
        else{
            exibirTextoNaTela("p", "O número secreto é maior"); 
        }
        tentativas++; 
        limparCampo(); 
    }
}

// Função que gera o múmero aleatorio
function gerarNumeroAleatorio(){
    // parseInt converte o número para inteiro e o Math.random gera um número aleatorio
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 ); 
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; 

    if (quantidadeDeElementosNaLista == numeroLimite ){

        listaDeNumerosSorteados = [];

    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    
    }
    else {
        listaDeNumerosSorteados.push(numeroEscolhido); 
        return numeroEscolhido ; 
    }

}

function limparCampo(){

    chute = document.querySelector("input"); 
    chute.value= "";

}

function reiniciarJogo(){

    numeroAleatorio = gerarNumeroAleatorio(); 
    limparCampo(); 
    tentativas = 1; 
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);

}