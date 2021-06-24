import React, { useEffect, useState } from 'react';
import './App.css';
import getQuizdata from './services/quiz_service';
import { QuestionType } from './Types/types';
import Question from './components/Question';



function App() {

  const [quiz, setQuiz] = useState<QuestionType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const questions: QuestionType[] = await getQuizdata(5, 'easy');
      console.log(questions);
      setQuiz(questions);
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <Question question={quiz[0]?.question} options={quiz[0]?.option} />
    </div>
  );
}

export default App;
