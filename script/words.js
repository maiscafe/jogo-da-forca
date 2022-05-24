var fruits = [];
var objetos = [];
var cor = [];
var pais = [];
var outros = [];
var animais =[];
var words = [fruits, objetos, cor, pais, animais, outros];
var caractere = [];
var palavraEscolhida = ""
var underline = [];
var keyError = [];
var key
var word
var keyAgain = '';


var dicaPalavra = document.getElementById("dica");
var spanWord = document.getElementById("secretWord");
var wordLines = document.getElementById("wordLines")
var error = document.getElementById("error");
var btnTeste = document.getElementById("newGameAgain");




fruits.push ("fruta", "abacaxi", "abacate", "amora", "banana", "bacuri", "buriti", "caju", "carambola", "cacau", "mamão", "melancia", "marmelo", "laranja", "limão", "lichia", "damasco", "figo", "jambo");

objetos.push("objeto", "pincel", "colher", "copo", "abajur", "arco", "bigorna", "brinco", "capacete", "chupeta", "dardo", "disco", "escova", "estojo");

cor.push("cor", "roxo", "vermelho", "rosa", "preto", "cinza", "laranja", "magenta", "gelo");

pais.push("país", "argentina", "brasil", "chile", "colombia", "costa-rica", "cuba", "dominica", "guiana", "guiana francesa", "haiti", "honduras", "jamaica", "mexico", "nicarágua", "panama", "paraguai", "peru", "suriname", "uruguai", "venezuela");

animais.push("animal", "baleia", "alce", "cachorro", "gato", "vaca", "cavalo", "onça", "leão", "macaco", "pato", "pinguim", "tartaruga", "tucano", "urso", "zebra", "pavão", "lobo", "tigre", "peixe", "lebre", "porco", "codorna", "falcão", "abutre", "canário", "papagaio", "arara");

outros.push("Outros", "água", "fogo", "terra", "internet", "email", "onda", "casa", "cidade", "música", "artista", "atriz", "ator", "hora", "alura", "mentoria", "orelha", "boca", "orelha", "coração", "kurupi");

quantPalavras();

btnTeste.addEventListener("click", selectWord);



function selectWord() { /* Seleciona a palavra dentro do array e a dica */
    let dica = Math.floor(Math.random() * words.length);
    
    console.log(keyAgain);
    word = words[dica];
    dicaPalavra.innerHTML = ('DICA: ' + word[0].toUpperCase());
    let palavra = Math.floor(Math.random() * word.length);
    if (palavra == 0) {
        palavra = Math.floor(Math.random() * word.length);
    }
    codeWord(word[palavra].toUpperCase());
    palavraEscolhida = (word[palavra].toUpperCase());
    error.innerHTML = '';
    keyAgain = '';
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
    underline = [];
    var key = '';
    for (let i = 0; i < secretWord.length; i++){
        caractere.push(secretWord[i].normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '')).toUpperCase;;
        underline.push("_ ");
        key += underline[i];
    } 
        spanWord.innerHTML = key
        console.log(caractere);

}



function testKey (event) {
    keyAgain = event.key.toUpperCase();
    console.log(keyAgain);

    for (let i = 0; i < palavraEscolhida.length; i++) {
        if (palavraEscolhida.search(keyAgain) == -1) {
           if (addErro(keyAgain) == false ) {
            keyError.push(keyAgain)
            error.innerHTML += keyAgain
            console.log(keyError);
           }
            break
        } else if(keyAgain == caractere[i]) {
            underline[i] = keyAgain;
            keyError.push(keyAgain)
            spanWord.innerHTML = underline.join(" ");
            console.log(underline);
        }
    }
}

function addErro (keyAgain) {
    let trueOrFalse = ''
    for (let i = 0; i <= keyError.length ; i++) {
        if (keyError[i] !== keyAgain) {
            
            trueOrFalse += keyAgain
        }
    }
    if (trueOrFalse.length > 0) {
        return false
    }
}