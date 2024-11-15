import React from 'react';
import User from "./hoc/User";
import SomeComp from "./SomeComp";

const App = () => {
    return (
        <div>
            <User><SomeComp/></User>
        </div>
    );
};

export default App;