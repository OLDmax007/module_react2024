import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

type PaginationProps = {
    btnSwitch: boolean
}

const Pagination:FC<PaginationProps> = ({btnSwitch}) => {
    const [query, setQuery] = useSearchParams({page: '1'})
    const isFirstPage:boolean = query.get('page') === '1';

    const onClickPrevHandler = () => {
        const page = query.get('page');
        if (page && +page > 0) {
            let curPage = +page
            curPage--
            setQuery({page: curPage.toString()})
        }
    }

    const onClickNextHandler = () => {
        const page = query.get('page');
        if (page) {
            let curPage = +page
            curPage++
            setQuery({page: curPage.toString()})
        }
    }



    return (
        <div>

            <button disabled={isFirstPage} onClick={onClickPrevHandler}>Prev</button>
            <button disabled={btnSwitch} onClick={onClickNextHandler}>Next</button>

        </div>
    );
};

export default Pagination;