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
var cont = 0


var dicaPalavra = document.getElementById("dica");
var spanWord = document.getElementById("secretWord");
var wordLines = document.getElementById("wordLines")
var error = document.getElementById("error");
var btnNewGame = document.getElementById("newGameAgain");




fruits.push ("fruta", "abacaxi", "abacate", "amora", "banana", "bacuri", "buriti", "caju", "carambola", "cacau", "mamão", "melancia", "marmelo", "laranja", "limão", "lichia", "damasco", "figo", "jambo");

objetos.push("objeto", "pincel", "colher", "copo", "abajur", "arco", "bigorna", "brinco", "capacete", "chupeta", "dardo", "disco", "escova", "estojo");

cor.push("cor", "roxo", "vermelho", "rosa", "preto", "cinza", "laranja", "magenta", "gelo");

pais.push("país", "argentina", "brasil", "chile", "colombia", "costa-rica", "cuba", "dominica", "guiana", "guiana francesa", "haiti", "honduras", "jamaica", "mexico", "nicarágua", "panama", "paraguai", "peru", "suriname", "uruguai", "venezuela");

animais.push("animal", "baleia", "alce", "cachorro", "gato", "vaca", "cavalo", "onça", "leão", "macaco", "pato", "pinguim", "tartaruga", "tucano", "urso", "zebra", "pavão", "lobo", "tigre", "peixe", "lebre", "porco", "codorna", "falcão", "abutre", "canário", "papagaio", "arara");

outros.push("Outros", "água", "fogo", "terra", "internet", "email", "onda", "casa", "cidade", "música", "artista", "atriz", "ator", "hora", "alura", "mentoria", "orelha", "boca", "orelha", "coração", "kurupi");

quantPalavras();

btnNewGame.addEventListener("click", selectWord);



function selectWord() { /* Seleciona a palavra dentro do array e a dica */
    let dica = Math.floor(Math.random() * words.length);
    error.innerHTML = '';
    keyError = []
    cont = 0
    contErro = 0
    word = words[dica];
    dicaPalavra.innerHTML = ('DICA: ' + word[0].toUpperCase());
    let palavra = Math.floor(Math.random() * word.length);
    if (palavra == 0) {
        palavra = Math.floor(Math.random() * word.length);
    }
    palavraUnderline = (word[palavra].toUpperCase())
    palavraEscolhida = formataPalavra(word[palavra]);
    codeWord(palavraEscolhida);
    console.log(palavraUnderline);
    console.log(palavraEscolhida);
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
    let wordSpace = ''
    var key = '';
    for (let i = 0; i < secretWord.length; i++){
        wordSpace = caractere.push(secretWord[i].normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '')).toUpperCase;
        underline.push("_ ");
        key += underline[i];
    } 
        spanWord.innerHTML = key
        console.log(caractere);

}



function testKey (event) {
    key = event.key.toUpperCase();
    let teste = 0
    if (keyDuplicated(key) == false ) {
        for (let i = 0; i < palavraEscolhida.length; i++) {
            if (key == palavraEscolhida[i] && contador(cont, contErro) == true ) {
                teste++
                underline[i] = palavraUnderline[i]
                spanWord.innerHTML = underline.join(" ");
                cont++
            }
        }
        if (teste == 0 && contador(cont, contErro) == true) {
            error.innerHTML += key;
            contErro++
        }
    contador(cont, contErro)
    keyError.push(key)
    console.log(keyError);
    }
}


function keyDuplicated(key) {
    let teste = false
    for (let i = 0; i <= keyError.length; i++) {
        if (keyError[i] == key) {
            teste = true
        }
    }
    return teste
}

function formataPalavra (text) {
    
    text = text.toUpperCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    text = text.toUpperCase(); 
    return text;

}

function contador(cont, contErro) {
    let teste = true
    if (cont >= palavraEscolhida.length) {
        dicaPalavra.innerHTML = 'PARABÉNS, VOCÊ ACERTOU!'
        teste = false
    }
    if (contErro >=5) {
        dica.innerHTML = `Você errou! A palavra era ${palavraEscolhida}`
        teste = false
    }
    return teste
}