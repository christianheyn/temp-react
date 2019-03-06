import React, { Component, useState } from 'react';
import './App.css';

import { withMyComponet } from './MyComponet';

const MyComponet = withMyComponet('HUHU!')

class App extends Component {
    render() {
        return (
            <div className="App">
                <MyComponet />
            </div>
        );
    }
}

export default App;
