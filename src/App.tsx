import React, {useReducer} from 'react';
import reducerActions from "./utils/reducerActions";

const App = () => {


   const [num, dispatch] = useReducer(reducerActions, 0)


    const decrement = () => {
        dispatch({type: 'dec', payload: 5})
    };

    const increment = () => {
        dispatch({type: 'inc', payload: 5})
    };

    const reset = () => {
        dispatch({type: 'reset', payload: 0})
    }


    return (
        <div>

            <h1>{num}</h1>
            <button onClick={decrement}>dec</button>
            <button onClick={increment}>inc</button>
            <button onClick={reset}>reset</button>
        </div>
    );
};

export default App;
