import React, { useEffect, useState } from 'react';
import './App.css';

import { Button } from './react-components/Button';
import { Counter } from './react-components/Counter';
import { Layout } from './react-components/Layout';


const data = [
    { name: 'hans', id: 0 },
    { name: 'paul', id: 1 },
    { name: 'tom',  id: 2},
]
const Name = ({ name }) => <li>{name}</li>;

const App = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count + 1);

    // useEffect(() => {
    //     window.setInterval(handleClick, 1000);
    //     return function cleanup() {
    //         window.clearInterval(handleClick, 1000);
    //     }
    // })

    return (
        <div className="App">
            <Layout>
                <Button className="test" onClick={handleClick}>HEEE!</Button>
                <Counter count={count} />
                { data.map(Name) }
            </Layout>
        </div>
    );
};

export default App;
