import React, { Component, useState } from 'react';
import './App.css';

import { MyComponet } from './MyComponet';

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
