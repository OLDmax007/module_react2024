import React, {FC} from 'react';
import './App.css';
import Users from "./components/Users";
import {IUser} from "./models/IUser";

const App: FC = () => {

    const printUser = (user:IUser):IUser => {
        return user
    }

    return (
        <div className="App">
            <Users printUser={printUser} />
        </div>
    );
}

export default App;




