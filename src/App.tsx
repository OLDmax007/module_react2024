import React, {useEffect, useState} from 'react';

const App = () => {
    let [count, setCount] = useState<number>(0)

    console.log('basic: '+ count)

    useEffect(() => {
        console.log(count)

        // func unsubscribe
        return (
            () => {
                console.log('finish')
            }
        )

    }, [count]);



    const inc = () => {
        setCount(prevState => prevState+1)
        setCount(prevState => prevState+1)
        setCount(prevState => prevState+1)
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