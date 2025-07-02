function GetWordsWithHashTag(sentence) {
    const words = sentence.split(" ");
    const result = [];

    for (let word of words) {
        if (word.startsWith("#") && word.length > 1) {
            const tag = word.slice(1);
            if (/^[A-Za-z]+$/.test(tag)) {
                result.push(`#${tag}`);
            }
        }
    }

    return result;
}

GetWordsWithHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')
