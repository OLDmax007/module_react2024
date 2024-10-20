import React, {FC, useState} from 'react';
import './App.css';
import Users from "./components/Users";
import {IUser} from "./models/IUser";
import {ITodo} from "./models/ITodo";
import {getTodoOfUser} from "./services/api.service";

const App: FC = () => {


    const [user, setUser] = useState<IUser | null>(null)
    const printUser = (user:IUser):void => {
        setUser(user)
    }


    const [todos, setTodos] = useState<ITodo[]>([])

    const showTodoOfUser = (user: IUser) => {
      getTodoOfUser(user).then((data: ITodo[]) => {

                setTodos(data)
            });
    }

    return (
        <div className="App">
            {user?.id}
            {
                todos.map((todo:ITodo) =>
                <p key={todo.id}>{todo.completed.toString()}</p>
            )
            }

            <Users printUser={printUser} showTodoOfUser={showTodoOfUser} />
        </div>
    );
}

export default App;




