var btnSendWord = document.getElementById('sendWord')
var newWord = document.getElementById('newWord')
var dicaRadio = document.querySelectorAll('input[name="radioDica"]')

btnSendWord.addEventListener("click", radioSelect)



function radioSelect() { //capta a categoria da palavra
    let radios = dicaRadio
    let radioChecked = ''
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked == true) {
            radioChecked = radios[i]
        }
    }
    let noSpace = newWord.value.replace(/\s/g, '')
    noSpace
   addNewWord(noSpace, radioChecked.id.toLowerCase())

} 

function addNewWord(word, radio) { //Insere a nova palavra no array das dicas
    let wordRadio = ''
    for(let i = 0;  i < words.length; i++) {
        wordRadio = words[i]

        if (wordRadio[0].toLowerCase() === radio) {
            wordRadio.push(word)
        }
        
    }
}