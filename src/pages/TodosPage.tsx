import React from 'react';
import Pagination from "../components/Pagination";
import Todos from "../components/Todos/Todos";

const TodosPage = () => {
    return (
        <div>
            <Todos/>
            <Pagination/>
        </div>
    );
};

export default TodosPage;