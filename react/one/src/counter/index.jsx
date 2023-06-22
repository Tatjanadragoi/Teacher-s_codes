import React from "react";
import {useCounter} from '../hooks/use-counter';


export const Counter = ({ amount, title }) => {
   const {addCounter: addAge, subCounter: subAge, counter: age} = useCounter(amount);

    return (
        <div>
            <h2>{ title } Clicker</h2>
            <div>{ age }</div>
            <button onClick={addAge}>+</button>
            <button onClick={subAge}>-</button>
        </div>
    );

};