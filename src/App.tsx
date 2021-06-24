import React, { useEffect, useState } from 'react';
import './App.css';
import getQuizdata from './services/quiz_service';
import { Quiz } from './Types/types';

function App() {

  const [quiz, setQuiz] = useState<Quiz[]>([]);

  useEffect(() => {
    async function fetchData() {
      const questions: Quiz[] = await getQuizdata(5, 'easy');
      console.log(questions);
      setQuiz(questions);
    }
    fetchData()
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
