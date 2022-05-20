var fruits = [];
var objetos = [];
var cor = [];
var pais = [];
var outros = [];
var animais =[];
var words = [fruits, objetos, cor, pais, animais, outros];

var dicaPalavra = document.getElementById("dica");
var secretWord = document.getElementById("secretWord");

var btnTeste = document.getElementById("newGameAgain");




fruits.push ("fruta", "abacaxi", "abacate", "amora", "banana", "bacuri", "buriti", "caju", "carambola", "cacau", "mamão", "melancia", "marmelo", "laranja", "limão", "lichia", "damasco", "figo", "jambo");

objetos.push("objeto", "pincel", "colher", "copo", "abajur", "arco", "bigorna", "brinco", "capacete", "chupeta", "dardo", "disco", "escova", "estojo");

cor.push("cor", "roxo", "vermelho", "rosa", "preto", "cinza", "laranja", "magenta", "gelo");

pais.push("país", "argentina", "brasil", "chile", "colombia", "costa rica", "cuba", "dominica", "guiana", "guiana francesa", "haiti", "honduras", "jamaica", "mexico", "nicarágua", "panama", "paraguai", "peru", "suriname", "uruguai", "venezuela");

animais.push("animais", "baleia", "alce", "cachorro", "gato", "vaca", "cavalo", "onça", "leão", "macaco", "pato", "pinguim", "tartaruga", "tucano", "urso", "zebra", "pavão", "lobo", "tigre", "peixe", "lebre", "porco", "codorna", "falcão", "abutre", "canário", "papagaio", "arara");

outros.push("Outros", "água", "fogo", "terra", "internet", "email", "onda", "casa", "cidade", "música", "artista", "atriz", "ator", "hora", "alura", "mentoria", "ouvido", "boca", "orelha", "coração", "kurupi");

quantPalavras();

btnTeste.addEventListener("click", selectWord);


function selectWord() { /* Seleciona a palavra dentro do array e a dica */
    let dica = Math.floor(Math.random() * 6);
    word = words[dica];
    let palavra = Math.floor(Math.random() * word.length);
    if (palavra == 0) {
        palavra = Math.floor(Math.random() * word.length);
    }
    dicaPalavra.innerHTML = word[0].toUpperCase();
    quantCaracter(word[palavra]);

}

function quantCaracter(palavra){ /* Define a quantidade de caracteres */
    let quant = palavra.length;
    secretWord.innerHTML = "";
    for (let i = 0; i <= quant; i++) {
        secretWord.innerHTML += "_ ";
    }

}

function quantPalavras (){ /* Mostra a quantidade de palavras */
    let quant = cor.length + pais.length + fruits.length + objetos.length + animais.length + outros.length - words.length;
    console.log(quant);
    let span = document.getElementById("quant");
    span.innerHTML = "Atualmente nosso jogo conta com " + quant + " palavras. <br> Divirta-se :)";
}