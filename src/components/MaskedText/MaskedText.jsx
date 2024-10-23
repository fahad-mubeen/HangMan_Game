import { getMaskedString } from "./MaskingUtility";

function MaskedText({ originalWord, guessedWord }) {

    const maskedString = getMaskedString(originalWord, guessedWord);

    const maskedTextList = maskedString.map((letter, idx)=>{
        return (
            <span key={idx} className="mx-2 text-white text-2xl">
                {letter}
            </span>
        )
    });

    return (
        maskedTextList
    );
}

export default MaskedText