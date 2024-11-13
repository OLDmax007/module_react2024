import React, {useEffect, useState} from 'react';
import userService from "../services/api.user.service";
import {ITodo} from "../models/ITodo";


const Todos = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        userService.getTodosOfUser().then((data: ITodo[]) => {
            setTodos(data)
            console.log('ss')
        })

            .catch(reason=> {
                console.log(reason)
                userService.refreshToken().then(data => {
                    userService.getTodosOfUser()
                })
            })


    }, []);


    return (
        <div>
            {todos.map((todo:ITodo) => <p key={todo.id}>{todo.id}</p>)}
        </div>
    );
};

export default Todos;