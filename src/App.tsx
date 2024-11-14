import React, { useEffect, useRef, useState } from 'react';

const App = () => {
    const [count, setCount] = useState<number>(0);
    const someRef = useRef<number>(0);

        // useEffect(() => {
        //     console.log("count: " + count);
        // }, [count]);

    useEffect(() => {
        console.log("ref: " + someRef.current);
    }, [someRef.current]);

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
        someRef.current++;
        console.log("Updated someRef:", someRef.current);
    };

    const increment = () => {
        setCount(prevCount => prevCount + 1);
        someRef.current--;
        console.log("Updated someRef:", someRef.current);
    };

    return (
        <div>
            {/*<h1>Count: {count}</h1>*/}
            <h1>SomeRef: {someRef.current}</h1>
            <button onClick={decrement}>dec</button>
            <button onClick={increment}>inc</button>
        </div>
    );
};

export default App;
