import React, {useState} from 'react';
import Pagination from "../components/Pagination";
import Todos from "../components/Todos/Todos";

const TodosPage = () => {
    const [btnSwitch, setBtnSwitch] = useState<boolean>(false);

    return (
        <div>
            <Todos setBtnSwitch={setBtnSwitch} />
            <Pagination btnSwitch={btnSwitch}/>
        </div>
    );
};

export default TodosPage;