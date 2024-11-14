import React, {useEffect, useRef, useState} from 'react';

const App = () => {

    let [count, setCount] = useState<number>(0)
    let someRef = useRef<number>(0);

    useEffect(() => {
        console.log(count)
        console.log(someRef.current)
        console.log(someRef)
    }, [someRef.current]);


    return (
        <div>
            <button onClick={() => {
                count--
                console.log(someRef.current++);
            }}>dec
            </button>

            <button  onClick={() => {
                count++
                console.log(someRef.current--);
            }}>inc
            </button>

        </div>
    );
};

export default App;