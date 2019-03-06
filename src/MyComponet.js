import React, { useState, useEffect } from 'react';

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    const a = () => setCounter(counter + 2);
    return [counter, a]
};


export const withMyComponet = (hello) => () => {
    const [catAmount, setCounter] = useCounter();
    return <h1 onClick={setCounter}>{hello} {catAmount}</h1>;
};



