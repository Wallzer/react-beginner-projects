import './index.scss';
import React from 'react';
const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({score}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {score} ответа из 10</h2>
      <button>Попробовать снова</button>
    </div>
  );
}

function Game() {
    const [open, setOpen] = React.useState(false)
    const [currentQuestion, setCurrent] = React.useState(0)
    const maxlenght = questions.length
    const [score,setScore] = React.useState(0)
    function getScore() {
        return score;
    }
    let count = 0;
    function questionUpdate(x){
        if (x===questions[currentQuestion].correct){
            setScore(score+1);
            setCurrent(currentQuestion+1);
            count++;
        }else if (count===maxlenght) {

        }else{
            setCurrent(currentQuestion+1)
            count++

        }

    }




  return (
    <>
      <div className="progress">
        <div style={{ width: '50%' }} className="progress__inner"></div>
      </div>
      <h1>{questions[currentQuestion].title}</h1>
      <ul>
        <li onClick={()=>questionUpdate(0)}>{questions[currentQuestion].variants[0]}</li>
        <li onClick={()=>questionUpdate(1)}>{questions[currentQuestion].variants[1]}</li>
        <li onClick={()=>questionUpdate(2)}>{questions[currentQuestion].variants[2]}</li>

      </ul>
    </>
  );
}

function App() {



  return (
    <div className="App">
        <Game />
         <Result score={score} />
    </div>
  );
}

export default App;
