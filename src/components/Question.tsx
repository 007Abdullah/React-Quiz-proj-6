import React from 'react';
import { propType } from './../Types/types';


const Question: React.FC<propType> = ({ question, options }) => {
    console.log("Comping : ", question);
    console.log("Comping : ", options);

    return (
        <React.Fragment>
            <div>
                <h1>Hello</h1>
            </div>
        </React.Fragment>
    )
}

export default Question;