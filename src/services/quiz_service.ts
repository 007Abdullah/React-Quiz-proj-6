import { Quiz } from './../Types/types';

export default async function getQuizdata(numQues: number, level: string): Promise<Quiz[]> {
    let res = await fetch(`https://opentdb.com/api.php?amount=${numQues}&difficulty=${level}&type=multiple`)
    let { results } = await res.json();
    let quiz = results.map((questionObj: Quiz, indx: number) => {
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            option: questionObj.incorrect_answers.concat(questionObj.correct_answer)
        }
    })
    return quiz;
}