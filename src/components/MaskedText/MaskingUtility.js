export function getMaskedString(originalWord, guessedWord) {

    guessedWord = guessedWord.map((letter) => letter.toUpperCase());
    const guessedWordSet = new Set(guessedWord.join('').toUpperCase());
    
    const maskedString = originalWord.toUpperCase().split('').map((letter) => {
        return guessedWordSet.has(letter) ? letter : '_';
    });
    
    return maskedString;
}