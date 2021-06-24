import { Quiz, QuestionType } from './../Types/types';

const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)



export default async function getQuizdata(numQues: number, level: string): Promise<QuestionType[]> {
    let res = await fetch(`https://opentdb.com/api.php?amount=${numQues}&difficulty=${level}&type=multiple`)
    let { results } = await res?.json();
    let quiz: QuestionType[] = results?.map((questionObj: Quiz, indx: number) => {
        return {
            question: questionObj?.question,
            answer: questionObj?.correct_answer,
            option: shuffleArray(questionObj?.incorrect_answers.concat(questionObj?.correct_answer)),
        }
    })
    return quiz;
}