import React, {FC} from 'react';
import {ITodo} from "../../models/ITodo";

type TypeTodo = {
    todo: ITodo
}

const Todo:FC<TypeTodo> = ({todo}) => {
    return (
        <div>
            {todo.id} {todo.todo}
        </div>
    );
};

export default Todo;