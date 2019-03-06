import React, { useState, useEffect } from 'react';

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    const a = () => setCounter(counter + 2);
    return [counter, a]
};


export const withMyComponet = (hello) => () => {
    const [catAmount, setCounter] = useCounter();
    const handleClick = () => setCounter(catAmount + 2);

    return <h1 onClick={handleClick}>{hello} {catAmount}</h1>;
};



