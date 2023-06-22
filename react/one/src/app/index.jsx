import React from 'react';
import { Counter } from '../counter';


export const App = () => {
    const clickers = [
        {title: 'Age', amount: 1},
        {title: 'Eggs', amount: 10},
        {title: 'Meters', amount: 1000}
    ];

    return (
        <div>
           {clickers.map((props) => <Counter {...props} />)}
        </div>
    );
};

