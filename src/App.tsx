import React, {FC, useState} from 'react';
import './App.css';
import Users from "./components/Users";
import {IUser} from "./models/IUser";
import {json} from "node:stream/consumers";

const App: FC = () => {

    const printUser = (user:IUser):void => {
        setUser(user)
    }

    const [user, setUser] = useState<IUser | null>(null)


    return (
        <div className="App">
            {JSON.stringify(user)}
            {user?.id}
            <Users printUser={printUser} />
        </div>
    );
}

export default App;




