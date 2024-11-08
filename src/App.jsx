import './App.css';
import { Route, Routes } from 'react-router-dom';
import StartPage from './pages/startPage';
import SinglePlayerPlayPage from './pages/singlePlayerPlayPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <StartPage /> } />
      <Route path='/SinglePlayerPlayPage' element= {<SinglePlayerPlayPage /> } />
    </Routes>
  );
}

export default App;