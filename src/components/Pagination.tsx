import React from 'react';
import {useSearchParams} from "react-router-dom";

const Pagination = () => {
    const [query, setQuery] = useSearchParams({page:'1'})

    console.log('pag', query.get('page'))


    const onClickNextHandler = () => {
        const page = query.get('page');
        if (page) {
            let curPage = +page
            curPage++
            setQuery({page: curPage.toString()})
        }
    }

    const onClickPrevHandler = () => {

        const page = query.get('page');
        if (page ) {
            let curPage = +page

            if (curPage > 1) {
                curPage--;
                setQuery({ page: curPage.toString() });
            }
        }

    }

    return (
        <div>
            <button onClick={onClickPrevHandler}>prev</button>
            <button onClick={onClickNextHandler}>next</button>
        </div>
    );
};

export default Pagination;