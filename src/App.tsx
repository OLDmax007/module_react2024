import React, {FC} from 'react';
import './App.css';
import Users from "./components/Users";

const App: FC = () => {

    const printText = ():string => {
        return 'message'
    }


    return (
        <div className="App">
            <Users func={printText} />
        </div>
    );
}

export default App;




