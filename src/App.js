import React, { useEffect, useState } from 'react';
import './App.css';

import { Button } from './react-components/Button';
import { Counter } from './react-components/Counter';


const App = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count + 1);

    useEffect(() => {
        window.setInterval(handleClick, 1000);
        return function cleanup() {
            window.clearInterval(handleClick, 1000);
        }
    })

    return (
        <div className="App">
            <Button onClick={handleClick} />
            <Counter count={count} />
        </div>
    );
};

export default App;
