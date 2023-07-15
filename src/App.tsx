import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

function App() {
    let [num, setNum] = useState<number>(0)

    const maxValue = 5

    function upNumber (){
        if (num >= maxValue){
            return
        }
        setNum( (lastNum) => lastNum + 1)
    }
    function downNumber (){
        setNum(0)
    }

    return (
        <div className="App">
            <Counter
                maxValue={maxValue}
                upNumber={upNumber}
                downNumber={downNumber}
                num={num}
            />
        </div>
    );
}

export default App;
