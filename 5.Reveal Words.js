function revealWords(keyWords, sentence) {
        keyWords = keyWords.split(", ");
        sentenceArr = sentence.split(' ');
        for (const keyWord of keyWords) {
            for (const word of sentenceArr) {
             if (word.includes("*")) {
               sentence = sentence.replace(word, keyWord);
               let indexOfWord = sentenceArr.indexOf(word); 
                sentenceArr.splice(indexOfWord, 1)
               break;
            }    
        }   
    }
   return sentence
   
}


revealWords('great',
'softuni is ***** place for learning new programming languages')