import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {IUser} from "./models/IUser";
import {IApiUsers} from "./models/IApiUsers";

const App: FC = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then((data:IApiUsers) => {
                setUsers(data.users)
            });
    }, []);


  return (
      <div className="App">
          {users.map((user: IUser) => <p key={user.id}>{user.firstName}</p> )}
      </div>
  );
}

export default App;
