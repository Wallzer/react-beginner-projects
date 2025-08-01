import './index.scss';
import React from 'react';
function App() {
    const [score,SetScore] = React.useState(0)
    function PlusScore(){
        SetScore(score+1);
    }
    function MinusScore(){
        SetScore(score-1);
    }

  return (

    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{score}</h1>
        <button onClick={MinusScore} className="minus">- Минус</button>
        <button onClick={PlusScore} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
