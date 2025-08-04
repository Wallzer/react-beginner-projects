import './index.scss';
import React, {useEffect, useState} from 'react';
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

function Result({ score }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`result ${visible ? 'show' : ''}`}>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="result" />
      <h2>Вы отгадали {score} ответа из {questions.length}</h2>
      <button>Попробовать снова</button>
    </div>
  );
}

function Game({setCount,count,currentQuestion,setScore,score,setCurrent,maxlenght}) {
    const percentage = Math.round((currentQuestion / maxlenght) * 100);
    function questionUpdate(x){
        if (x===questions[currentQuestion].correct){
            setScore(score+1);
            setCurrent(currentQuestion+1);
            setCount(count+1);


        }else if (count===maxlenght) {

        }else{
            setCurrent(currentQuestion+1)
            setCount(count+1);

        }

    }




  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
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
    // const [open, setOpen] = React.useState(false)
    const [currentQuestion, setCurrent] = React.useState(0)
    const maxlenght = questions.length
    const [score,setScore] = React.useState(0)
    const [count,setCount] = React.useState(0)
  return (
    <div className="App">
        {count===maxlenght ? (<Result score={score} />):
        (<Game setCount={setCount} count={count} currentQuestion={currentQuestion} score={score} setScore={setScore} setCurrent={setCurrent} maxlenght={maxlenght} />)}

    </div>
  );
}

export default App;
