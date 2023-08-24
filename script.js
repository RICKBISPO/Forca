var bancoDePalavras = ["abacaxi", "banana", "computador", "dicionario", "elefante", "futebol", 
"girassol", "hipopotamo", "igreja", "janela", "kiwi", "limonada", "macaco", "nariz", "orelha", 
"piano", "quadro", "rosa", "sapato", "tartaruga"];
const palavra = bancoDePalavras[Math.floor(Math.random() * 20)];
var letras = document.querySelector("#letras");
var letrasSetinha = [];

for (let index = 0; index < palavra.length; index++) {
    letrasSetinha[index] = "_ ";
}

letras.textContent = letrasSetinha.join("");

var contaErros = 0;
var botaoValidar = document.querySelector("#botaoValidar");
botaoValidar.addEventListener("click", () => {

    console.log(letrasSetinha);
    var inserirletra = document.querySelector("#inserirLetra").value;
    var flagAchou = false;

    for (let index = 0; index < palavra.length; index++) {
        
        if (inserirletra === palavra[index]) {
            letrasSetinha[index] = inserirletra;
            flagAchou = true;
        }
    }

    if (!flagAchou) {
        
        contaErros++;
        var alterarImagem = document.querySelector("#imgForca").src = "img/"+contaErros+".png";
        if (contaErros === 6) {
            location.reload();
            alert("VOCE PERDEU!!");
        }
    }

    if (letrasSetinha.join("") === palavra) {
        location.reload();
        alert("VOCE GANHOU!!");
    }

    inserirletra = document.querySelector("#inserirLetra").value = "";
    letras.textContent = letrasSetinha.join("");
})




