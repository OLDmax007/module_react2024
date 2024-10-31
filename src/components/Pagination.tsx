import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

type PaginationProps = {
    setBtnSwitch: () => void
}

const Pagination:FC = () => {
    const [query, setQuery] = useSearchParams({page: '1'})

    console.log(query.get('page'))

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

            <button onClick={onClickPrevHandler}>Prev</button>
            <button onClick={onClickNextHandler}>Next</button>

        </div>
    );
};

export default Pagination;