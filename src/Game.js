import { useState, useEffect } from "react";

const Game = (prop) => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [proposedAnswer, setProposedAnswer] = useState(null);

  useEffect(() => {
    let newQuestionArray = makeNewQuestion();
    setValue1(newQuestionArray[0]);
    setValue2(newQuestionArray[1]);
    setValue3(newQuestionArray[2]);
    setProposedAnswer(newQuestionArray[3]);
  }, []);

  const makeNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);

    const proposedAnswer =
      Math.floor(Math.random() * 3) + (value1 + value2 + value3);

    return [value1, value2, value3, proposedAnswer];
  };

  const refresh = (newValuesArray) => {
    setValue1(newValuesArray[0]);
    setValue2(newValuesArray[1]);
    setValue3(newValuesArray[2]);
    setProposedAnswer(newValuesArray[3]);
  };

  const handleAnswer = (e) => {
    const newValuesArray = makeNewQuestion();
    refresh(newValuesArray);
    const aswerIsCorrect = evaluateAnswer(e.target.name);
    prop.handleAnswer(aswerIsCorrect);
  };

  const evaluateAnswer = (givenAnswer) => {
    const correctAnswer = value1 + value2 + value3;

    return (
      (correctAnswer === proposedAnswer && givenAnswer === "true") ||
      (correctAnswer !== proposedAnswer && givenAnswer === "false")
    );
  };
  return (
    <div>
      <div className="equation">
        <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
      </div>
      <button type="button" className="btn btn-success" onClick={handleAnswer} name="true">
        صح
      </button>
      <button type="button" className="btn btn-danger" name="false" onClick={handleAnswer}>
        خطأ
      </button>
    </div>
  );
};

export default Game;
