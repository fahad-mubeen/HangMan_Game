import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HangmanWords from "../components/HangmanWordsData/HangmanWordsData.json";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import MaskedText from "../components/MaskedText/MaskedText";
import HagmanStage from "../components/HangManStage/HangManStage";

const wordObject =
  HangmanWords[Math.floor(Math.random() * HangmanWords.length)];

function SinglePlayerPlayPage() {
  const navigate = useNavigate();
  let word = wordObject.word;
  word = word.toUpperCase();
  const hint = wordObject.hint;

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [hagmanStage, setHagmanStage] = useState(0);

  function isGameWon(newGuessedLetters) {
    const wordSet = new Set(word);
    const guessedSet = new Set(newGuessedLetters.join("").toUpperCase());

    for (let letter of wordSet) {
      if (!guessedSet.has(letter)) {
        return false;
      }
    }
    return true;
  }

  function handleLetterClick(letter) {
    if (!word.includes(letter)) {
      if (hagmanStage === 6) {
        setHagmanStage(7);
        setTimeout(() => {
          alert("You Lost!");
          setGuessedLetters([]);
          setHagmanStage(0);
          navigate('/SinglePlayerPlayPage');
        }, 100);
      } else {
        setHagmanStage(hagmanStage + 1);
      }
    }

    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);

    if (isGameWon(newGuessedLetters)) {
      setTimeout(() => {
        alert("You Won!");
        setGuessedLetters([]);
        setHagmanStage(0);
        navigate('/SinglePlayerPlayPage');
      }, 100);
    }
  }

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-evenly p-4 md:flex-row-reverse md:justify-center md:gap-8">
        
      {/* Hangman Stage and Remaining Steps */}
      <div className="m-2 flex flex-row-reverse items-center md:flex-col">
        <div className="p-2 flex flex-col items-center md:items-start">
          <div className="text-[#66bb6a] text-2xl md:text-3xl mb-1 text-center font-bold">
            Guess The Word
          </div>
          <div className="text-white mb-2 text-center text-sm md:text-base md:flex md:items-center md:justify-center md:gap-1 w-full">
            Remaining steps:{" "}
            <span className="text-red-400">{7 - hagmanStage}</span>
          </div>
        </div>
        <div className="w-48 md:w-96">
          <HagmanStage step={hagmanStage} />
        </div>
      </div>

      {/* Word Hint and Buttons */}
      <div className="m-2 flex flex-col items-center w-full max-w-xl">
        <div className="text-black bg-blue-500 text-center p-4 font-bold rounded max-w-sm">
          Hint: <span className="text-white">{hint}</span>
        </div>

        <div className="items-center m-2 p-2">
          <MaskedText originalWord={word} guessedWord={guessedLetters} />
        </div>

        <div className="bg-yellow-500 p-2 pr-1 pl-1 flex flex-wrap justify-center max-w-lg rounded shadow-lg">
          <LetterButtons
            originalWord={word}
            guessedWord={guessedLetters}
            onLetterClick={handleLetterClick}
          />
        </div>
      </div>
    </div>
  );
}

export default SinglePlayerPlayPage;
