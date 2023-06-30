import React from "react";
import {useCounter} from '../hooks/use-counter';


export const Counter = ({title, amount}) => {
   const {addCounter, subCounter, counter} = useCounter(amount);

    return (
        <div>
            <h2>{ title } Clicker</h2>
            <div>{ counter }</div>
            <button onClick={addCounter}>+</button>
            <button onClick={subCounter}>-</button>
        </div>
    );
};
