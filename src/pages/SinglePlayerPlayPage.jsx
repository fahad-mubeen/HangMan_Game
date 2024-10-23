import { useState } from "react";
import HangmanWords from "../components/HangmanWords/HangmanWords.json"
import LetterButtons from "../components/LetterButtons/LetterButtons";
import MaskedText from "../components/MaskedText/MaskedText";
import HagmanStage from "../components/HangManStage/HangManStage";

const wordObject = HangmanWords[Math.floor(Math.random() * HangmanWords.length)];

function SinglePlayerPlayPage() {
    
    let word = wordObject.word;
    word = word.toUpperCase();
    const hint = wordObject.hint;

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [hagmanStage, setHagmanStage] = useState(0);

    function isGameWon(newGuessedLetters) {
        const wordSet = new Set(word);
        const guessedSet = new Set(newGuessedLetters.join('').toUpperCase());

        for (let letter of wordSet) {
            if (! guessedSet.has(letter)) {
                return false;
            }
        }
        return true;
    }

    function handleLetterClick(letter) {
        if (! word.includes(letter)) {
            if (hagmanStage === 6) {
                setHagmanStage(7);
                setTimeout(() => {
                    alert("You Lost!");
                    setGuessedLetters([]);
                    setHagmanStage(0);
                    document.location.reload();
                }, 100); 
            } else {
                setHagmanStage(hagmanStage + 1);
            }
        }

        const newGuessedLetters = [...guessedLetters, letter];
        setGuessedLetters(newGuessedLetters);
        
        if(isGameWon(newGuessedLetters)) {
            setTimeout(()=>{
                alert("You Won!");
                setGuessedLetters([]);
                setHagmanStage(0);
                document.location.reload();
            }, 100);
        }
    }    

    return (
        <div className="bg-black min-h-screen">
            <div>

                <div className="text-white" >Guess The Word</div>
                <div className="bg-blue-100">
                   Remaining steps: {7 - hagmanStage}
                </div>
                <div className="text-white" >Hint: {hint}</div>

                <div>
                    <MaskedText originalWord={word} guessedWord={guessedLetters} />   
                </div>
                <div className="bg-yellow-500 p-2 justify-evenly" >
                    <LetterButtons originalWord={word} guessedWord={guessedLetters} onLetterClick={handleLetterClick} />
                </div>

            </div>

            <div>
                <HagmanStage step={hagmanStage} />
            </div>

        </div>
    )
}

export default SinglePlayerPlayPage