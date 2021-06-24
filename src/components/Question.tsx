import React, { useState } from 'react';
import { propType } from './../Types/types';


const Question: React.FC<propType> = ({ question, options, callback }) => {
    console.log("Comping : ", question);
    console.log("Comping : ", options);
    let [userSelect, setUserSelect] = useState();

    const handleState = (e: any) => {
        setUserSelect(e.target.value);
    }
    return (
        <React.Fragment>
            <div className="question-container">
                <div className="question">
                    Question : {question}
                </div>
                <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, userSelect)}>
                    {options?.map((eachOption: string, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <div>
                                    <label>
                                        <input type="radio" name="option" value={eachOption} required checked={userSelect === eachOption} onChange={handleState} />
                                        {eachOption}
                                    </label>
                                </div>
                            </React.Fragment>
                        )
                    })}
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </React.Fragment>
    )
}

export default Question;