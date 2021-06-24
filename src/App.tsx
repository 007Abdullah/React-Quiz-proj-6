import React, { useEffect, useState } from 'react';
import './App.css';
import getQuizdata from './services/quiz_service';
import { QuestionType } from './Types/types';
import Question from './components/Question';



function App() {

  const [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [increment, setIncrement] = useState(0);
  let [result, setResult] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const questions: QuestionType[] = await getQuizdata(5, 'easy');
      console.log(questions);
      setQuiz(questions);
    }
    fetchData()
  }, [])

  console.log("How its work", quiz[currentQuestion]?.answer);

  const handleSubmit = (e: React.FormEvent<EventTarget>, userSelect: any) => {
    e.preventDefault();

    if (userSelect === quiz[currentQuestion]?.answer) {
      setIncrement(++increment);
    }
    if (currentQuestion !== quiz.length - 1) {
      setCurrentQuestion(++currentQuestion);
    }
    else {
      setResult(true)
    }
  }

  if (result) {
    return (
      <React.Fragment>
        <div style={{ textAlign: 'center' }}>
          <h1>Correct Answer :{increment}</h1>
          Total Answer :{quiz.length}
        </div>

      </React.Fragment>

    )
  }

  return (
    <div className="App">
      <Question
        question={quiz[currentQuestion]?.question}
        options={quiz[currentQuestion]?.option}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
