//===Uppercase every word==//

function upWord(sentence){

    uWord = sentence;

    new_sentence = uWord[0].toUpperCase();

    for (var i = 1; i < uWord.length; i++){
        if (uWord[i] == ' '){
            new_sentence = new_sentence.concat(uWord[i]);
            var i = i + 1;
            new_sentence = new_sentence.concat(uWord[i].toUpperCase());
        } else{
            new_sentence = new_sentence.concat(uWord[i]);
        }
    }
    return new_sentence;
}

console.log(upWord('this is a very long string'));