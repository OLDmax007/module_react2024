import React, {useState} from 'react';
import SomeComp from "./SomeComp";


const App = () => {

    const [num, setNum] = useState<number>(0)
console.log(num)

    return (
        <div>
            <SomeComp/>
            <button onClick={() => {
                setNum(prevState => prevState + 1)
            }}>inc
            </button>
        </div>
    );
};

export default App;