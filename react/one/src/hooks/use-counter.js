import {useState} from 'react';


export const useCounter = (amount = 1) => {
    const [counter, setCounter] = useState(0);

    const addCounter = () => {
        setCounter((prevCounter) => prevCounter + amount);
    };

    const subCounter = () => {
        setCounter((prevCounter) => prevCounter === 0 ? 0 : prevCounter - amount);
    };

    return {
        addCounter,
        subCounter,
        counter
    };
};