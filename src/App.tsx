import React from 'react';

import './App.css';
import {CardAll} from "./component/cardAll";


function App() {

    const options = [
        "Один",
        "Два",
        "Три",
        "Четыре",
        "Пять",
        "Шесть",
        "Семь",
    ];
    const status = [
        "half",
        "finish",
        "empty",
    ];


    return (
        <div className="App">
            <CardAll options={options} status={status} />
        </div>
    );
}

export default App;
