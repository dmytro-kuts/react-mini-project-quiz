import './index.scss';
import React from 'react';
import Game from './components/Game';
import Result from './components/Result';

const questions = [
  {
    title: 'React - це ... ?',
    variants: ['бібліотека', 'фреймворк', 'додаток'],
    correct: 0,
  },
  {
    title: 'Компонент - це...',
    variants: ['додаток', 'частина програми або сторінки', 'те, що я не знаю, що таке'],
    correct: 1,
  },
  {
    title: 'Що таке JSX?',
    variants: [
      'Це простий HTML',
      'Це функція',
      'Це той же HTML, але з можливістю виконувати JS-код',
    ],
    correct: 2,
  },
];

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);

  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          step={step}
          question={question}
          questions={questions}
          onClickVariant={onClickVariant}
        />
      ) : (
        <Result questions={questions} correct={correct} />
      )}
    </div>
  );
}

export default App;
