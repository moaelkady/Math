import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./Game";
import Score from "./Score";

const App = () => {
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [numQuestions, setNumQuestions] = useState(0);

  const handleAnswer = (answerIsCorrect) => {
    answerIsCorrect
      ? setCorrectAnswer(correctAnswer + 1)
      : setCorrectAnswer(correctAnswer);

    setNumQuestions(numQuestions + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">تحدي الرياضيات</h1>
      </header>

      <div className="game">
        <h2>أجب عن السؤال التالي</h2>
        <Game handleAnswer={handleAnswer} />
        <Score numCorrect={correctAnswer} numQ={numQuestions} />
      </div>
    </div>
  );
};

export default App;
