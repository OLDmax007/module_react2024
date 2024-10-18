import React, {FC, useEffect, useState} from 'react';
import './App.css';

const App: FC = () => {

    const [users, setUsers] = useState<any>([])


    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data.users)
            });
    }, []);

    console.log(users)

  return (
      <div className="App">
          {users.map((user: any) => <p key={user.id}>{user.firstName}</p> )}
      </div>
  );
}

export default App;
