import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

type TypePagination = {
    btnSwitch: boolean
}

const Pagination:FC<TypePagination> = ({btnSwitch}) => {
    const [query, setQuery] = useSearchParams({page:'1'})

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

    const isFirstPage:boolean = query.get('page') === '1';

    return (
        <div>
            <button disabled={isFirstPage}  onClick={onClickPrevHandler}>prev</button>
            <button disabled={btnSwitch} onClick={onClickNextHandler}>next</button>
        </div>
    );
};

export default Pagination;