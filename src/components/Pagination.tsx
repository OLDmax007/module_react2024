import React from 'react';
import {useSearchParams} from "react-router-dom";

const Pagination = () => {
   const [query, setQuery] = useSearchParams({page: '0'})
    console.log(query)



    return (
        <div>
            <button></button>
            <button></button>
        </div>
    );
};

export default Pagination;