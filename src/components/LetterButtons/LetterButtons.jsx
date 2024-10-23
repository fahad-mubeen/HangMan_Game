import {LetterButtonStyle} from "./LetterButtonStyle";

function LetterButtons( {originalWord, guessedWord, onLetterClick} ){
    const ALPHABETS = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');

    const originalWordSet = new Set(originalWord.toUpperCase());
    const guessedWordSet = new Set(guessedWord.join('').toUpperCase());

    const handleLetterClick = (e) => {
        const letter = e.target.value;
        onLetterClick?.(letter);
    }

    const buttons = ALPHABETS.map((letter)=>{
        return (
            <button
                key={`button-${letter}`} 
                value={letter}
                onClick={handleLetterClick}
                disabled={guessedWordSet.has(letter)}
                className={` ${LetterButtonStyle(letter, guessedWordSet, originalWordSet)} `}
            >
                {letter}

            </button>
        );
    });

    return buttons;
}

export default LetterButtons;