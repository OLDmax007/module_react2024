import React, {FC, useState} from 'react';
import './App.css';
import Users from "./components/Users";
import {IUser} from "./models/IUser";
import {IApiUsers} from "./models/IApiUsers";
import {ITodo} from "./models/ITodo";

const App: FC = () => {


    const [user, setUser] = useState<IUser | null>(null)
    const printUser = (user:IUser):void => {
        setUser(user)
    }


    const [todos, setTodos] = useState<ITodo[]>([])

    const showTodoOfUser = (user: IUser) => {
        fetch('https://jsonplaceholder.typicode.com/todos?userId=' + user.id)
            .then(res => res.json())
            .then((data: ITodo[]) => {
                setTodos(data)
            });
    }
    console.log(todos)



    return (
        <div className="App">
            {user?.id}
            {JSON.stringify(todos)}
            <Users printUser={printUser} showTodoOfUser={showTodoOfUser} />
        </div>
    );
}

export default App;




