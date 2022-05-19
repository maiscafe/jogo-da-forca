
var btn = document.getElementById("startNewGame");

btn.addEventListener("click", selectWord)

function selectWord() {
    let dado = Math.floor(Math.random() * 3);
    console.log(words[dado]);
}