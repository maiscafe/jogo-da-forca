var fruits = [];
var objetos = [];
var cor = [];
var pais = [];
var words = [fruits, objetos, cor, pais];
fruits.push ("fruta", "abacaxi", "abacate", "amora", "banana", "bacuri", "buriti", "caju", "carambola", "cacau", "mamão", "melancia", "marmelo", "laranja", "limão", "lichia", "damasco", "figo", "jambo");

objetos.push("objeto", "pincel", "colher", "copo", "abajur", "arco", "bigorna", "brinco", "capacete", "chupeta", "dardo", "disco", "escova", "estojo");

cor.push("cor", "roxo", "vermelho", "rosa", "preto", "cinza", "laranja", "magenta", "gelo");

pais.push("país", "argentina", "brasil", "chile", "colombia", "costa rica", "cuba", "dominica", "guiana", "guiana francesa", "haiti", "honduras", "jamaica", "mexico", "nicarágua", "panama", "paraguai", "peru", "suriname", "uruguai", "venezuela");

var btn = document.getElementById("startNewGame");

btn.addEventListener("click", selectWord)

function selectWord() {
    let dica = Math.floor(Math.random() * 3);
    word = words[dica];
    console.log(word[0]);

    let palavra = Math.floor(Math.random() * word.length);
    console.log(word[palavra]);
        if (palavra == 0) {
            palavra = Math.floor(Math.random() * word.length);
            console.log(word[palavra]);
        }
}