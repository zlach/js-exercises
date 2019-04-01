//===Uppercase every word==//

function upWord(word){
    let uWord = word.toString();
    uWord[0].toUpperCase();
    for (var i = 0; i < uWord.length; i++){
        if (uWord[i] == ' ')
            uWord[i + 1].toUpperCase();
    }
    return uWord.join('');
}

console.log(upWord('this is a very long string'));


//not getting it