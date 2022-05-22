const firstPage = document.getElementById('firstPage');
const gamePage = document.getElementById('gamePage');
firstPage.style.display = 'flex';
gamePage.style.display = 'none';


var btnNewGame = document.getElementById("startNewGame");
var btnGiveUp = document.getElementById("giveUp");

btnNewGame.addEventListener("click", showGamePage);
btnGiveUp.addEventListener("click", showFirstPage)




function showFirstPage() {
    firstPage.style.display = "flex";
    gamePage.style.Display = "none";

};


function showGamePage(){
    
    firstPage.style.display = 'none';
    gamePage.style.display = 'flex';

};