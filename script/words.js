var fruits = [];
var objetos = [];
var cor = [];
var pais = [];
var outros = [];
var animais =[];
var words = [fruits, objetos, cor, pais, animais, outros];
var caractere = [];
var charCodes =[];
var palavraEscolhida = ""

var dicaPalavra = document.getElementById("dica");
var spanWord = document.getElementById("secretWord");
var wordLines = document.getElementById("wordLines")

var btnTeste = document.getElementById("newGameAgain");




fruits.push ("fruta", "abacaxi", "abacate", "amora", "banana", "bacuri", "buriti", "caju", "carambola", "cacau", "mamão", "melancia", "marmelo", "laranja", "limão", "lichia", "damasco", "figo", "jambo");

objetos.push("objeto", "pincel", "colher", "copo", "abajur", "arco", "bigorna", "brinco", "capacete", "chupeta", "dardo", "disco", "escova", "estojo");

cor.push("cor", "roxo", "vermelho", "rosa", "preto", "cinza", "laranja", "magenta", "gelo");

pais.push("país", "argentina", "brasil", "chile", "colombia", "costa rica", "cuba", "dominica", "guiana", "guiana francesa", "haiti", "honduras", "jamaica", "mexico", "nicarágua", "panama", "paraguai", "peru", "suriname", "uruguai", "venezuela");

animais.push("animal", "baleia", "alce", "cachorro", "gato", "vaca", "cavalo", "onça", "leão", "macaco", "pato", "pinguim", "tartaruga", "tucano", "urso", "zebra", "pavão", "lobo", "tigre", "peixe", "lebre", "porco", "codorna", "falcão", "abutre", "canário", "papagaio", "arara");

outros.push("Outros", "água", "fogo", "terra", "internet", "email", "onda", "casa", "cidade", "música", "artista", "atriz", "ator", "hora", "alura", "mentoria", "ouvido", "boca", "orelha", "coração", "kurupi");

quantPalavras();

btnTeste.addEventListener("click", selectWord);

window.addEventListener("keypress", testKey)

function selectWord() { /* Seleciona a palavra dentro do array e a dica */
    let dica = Math.floor(Math.random() * words.length);
    word = words[dica];
    dicaPalavra.innerHTML = word[0].toUpperCase();
    let palavra = Math.floor(Math.random() * word.length);
    if (palavra == 0) {
        palavra = Math.floor(Math.random() * word.length);
    }

    quantCaracter(word[palavra]);
    codeWord(word[palavra]);
    palavraEscolhida = (word[palavra]);
}

function quantCaracter(palavra){ /* Define a quantidade de caracteres */
    let quant = palavra.length;
    spanWord.innerHTML = "";
    wordLines.innerHTML = " ";
    for (let i = 0; i < quant; i++) {

        spanWord.innerHTML += (palavra[i] ).toUpperCase();
        wordLines.innerHTML += "_ "
    }

}

function quantPalavras (){ /* Mostra a quantidade de palavras */
    let quant = 0
    for (let i = 0; i < words.length; i++){
        quant = (quant + words[i].length);
    }
    quant = quant - words.length;
    document.getElementById("quant").innerHTML = "Atualmente nosso jogo conta com " + quant + " palavras. <br> Divirta-se :)";

}

function codeWord(secretWord) { /* transforma a palavra em um array de letras */
    caractere = [];
    for (let i = 0; i < secretWord.length; i++){
        caractere.push(secretWord[i].normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, ''));;
        } 
        console.log(caractere);
        transformWord(caractere);
}

function transformWord(caractere) { /* transforma o array de letras em um array de charCodes */
    caractere.forEach(function (caractere){
        console.log(caractere.charCodeAt(0));
        charCodes.push(caractere.charCodeAt(0));
    });

}

function testKey (event) {
    console.log(event.key);
    for (let i = 0; i < palavraEscolhida.length; i++) {
        if (event.key == caractere[i]) {
            console.log('teste');
        }
    }

}