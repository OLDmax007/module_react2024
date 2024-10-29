import React, {useEffect, useState} from 'react';
import {todoService} from "../../services/api.dummyjson.service";
import {IResponseDMJ} from "../../models/IResponseDMJ";
import {ITodo} from "../../models/ITodo";
import Todo from "../Todo/Todo";
import {useSearchParams} from "react-router-dom";

const Todos = () => {
    const [query, setQuery] = useSearchParams()
    console.log('todo', query.get('page'))


    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const page = query.get('page');
        if (page) {
            todoService.getAll(+page).then(((data: IResponseDMJ & { todos: ITodo[] }) => {
                setTodos(data.todos)
            }))
        }
    }, [query]);

    return (
        <div>
            {todos.map((todo: ITodo) => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default Todos;