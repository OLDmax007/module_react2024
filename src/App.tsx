import React, {useCallback, useMemo, useState} from 'react';
import SomeComp from "./SomeComp";


const App = () => {
    const [num, setNum] = useState<number>(0)

    console.log(num)


    const someFunc  = useCallback(() => {
        console.log('PPPESS')
    }, []);

    const returnSomeObj = useMemo(() => {
        return {id: 1}
    }, []);



    return (
        <div>
            <SomeComp num={0} someFunc={someFunc}  returnSomeObj={returnSomeObj}/>
            <button onClick={() => {
                setNum(prevState => prevState + 1)
            }}>inc
            </button>
        </div>
    );
};

export default App;