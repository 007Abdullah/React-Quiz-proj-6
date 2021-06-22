export default async function getQuizdata(numQues: number, level: string) {
    const res = await fetch(`https://opentdb.com/api.php?amount=${numQues}&difficulty=${level}&type=multiple`)
    let { results } = await res.json();
    return results
}