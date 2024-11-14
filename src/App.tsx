import React, {useState} from 'react';

const App = () => {
    let [count, setCount] = useState<number>(0)


    const inc = () => {
        setCount(count++)
    }

    const dec = () => {
        setCount(prevState => prevState-1)
    }





    return (
        <div>
            <h1>{count}</h1>
            <button onClick={dec}>dec</button>
            <button onClick={inc}>inc</button>


        </div>
    );
};

export default App;