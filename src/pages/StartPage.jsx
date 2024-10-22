import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function StartPage() {
  const [mode, setMode] = useState('');
  const [isWide, setIsWide] = useState(window.innerWidth > 768); 
  const navigate = useNavigate(); 

  const handleStartGame = () => {
    if (mode === 'singlePlayer') {
      console.log("Starting single-player game...");
      navigate('/SinglePlayerPlayPage');
    } else {
      alert("Please select a game mode.");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-gray-700 rounded-lg shadow-lg p-6">

        <div className="text-center text-4xl font-bold text-yellow-400 mb-6">Welcome To Hangman Game</div>

        <div className="text-center mb-6">
          <div className="mb-4 font-bold text-gray-200">Select Game Mode:</div>

          <div className="flex justify-evenly">
            <button
              style={{ width: isWide ? '209px' : 'auto' }}
              className={`${mode === 'singlePlayer' ? 'bg-blue-700 text-white' : 'bg-blue-400 text-white hover:bg-blue-500'} p-2 rounded transform transition-transform duration-200`}
              onClick={() => {
                (mode === 'singlePlayer') ? setMode('') : setMode('singlePlayer');
              }}
            >
              Single Player
            </button>

            <button
              style={{ width: isWide ? '209px' : '150px' }}
              className="bg-gray-600 text-gray-300 p-2 rounded cursor-not-allowed hover:bg-gray-500 text-wrap"
              disabled
            >
              Multi Player (coming soon)
            </button>
          </div>

        </div>

        <button
          onClick={handleStartGame}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Start Game
        </button>

      </div>
    </div>
  );
}

export default StartPage;
