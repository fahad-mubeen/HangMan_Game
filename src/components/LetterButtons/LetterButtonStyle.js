export function LetterButtonStyle(letter, guessedWordSet, originalWordSet) {

    const buttonColor = (l) => {
        if(guessedWordSet.has(l)) {
            return `${originalWordSet.has(l) ? "bg-green-500" : "bg-red-500"}`;
        }
        return 'bg-white';
    }

    return (
        `h-12 w-12 m-1 text-black rounded-md ${buttonColor(letter)}`
    )
}
