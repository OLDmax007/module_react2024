import React, {FC, useEffect, useState} from 'react';
import {todoService} from "../../services/api.dummyjson.service";
import {ITodo} from "../../models/ITodo";
import Todo from "../Todo/Todo";
import {useSearchParams} from "react-router-dom";

type TypeTodos = {
    setBtnSwitch: (value: boolean) => void
}


const Todos:FC<TypeTodos> = ({setBtnSwitch}) => {
    const [query] = useSearchParams({page: '1'})
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const page = query.get('page');
        if (page) {
            todoService.getAll(+page).then(((data: { flag: boolean } & { todos: ITodo[] }) => {
                setTodos(data.todos)
                setBtnSwitch(data.flag)
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