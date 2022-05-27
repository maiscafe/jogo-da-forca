const firstPage = document.getElementById('firstPage');
const gamePage = document.getElementById('gamePage');
const addWordPage = document.getElementById('addWordPage')
firstPage.style.display = 'flex';
gamePage.style.display = 'none';
addWordPage.style.display = 'none';


var btnNewGame = document.getElementById("startNewGame");
var btnGiveUp = document.getElementById("giveUp");
var btnAddWord = document.getElementById("addWord")
var btnComeBack = document.getElementById("comeBack")

btnNewGame.addEventListener("click", showGamePage);
btnGiveUp.addEventListener("click", showFirstPage);
btnAddWord.addEventListener("click", showAddWordPage);
btnComeBack.addEventListener("click", showFirstPage)




function showFirstPage() {
    firstPage.style.display = "flex";
    gamePage.style.display = "none";
    addWordPage.style.display = 'none';
};


function showGamePage(){
    window.addEventListener("keypress", testKey)
    firstPage.style.display = 'none';
    gamePage.style.display = 'flex';
    addWordPage.style.display = 'none';

};

function showAddWordPage () {
    firstPage.style.display = 'none'
    gamePage.style.display = 'none'
    addWordPage.style.display='flex'
}