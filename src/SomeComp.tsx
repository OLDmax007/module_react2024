import React, { FC, memo } from 'react';

const SomeComp: FC<any> = memo(({ num, someFunc, returnSomeObj }) => {
    console.log('pes');
    console.log(returnSomeObj)

    return (
        <div>
            <p>{num}</p>
            <button onClick={someFunc}>Call Function</button>
        </div>
    );
});

export default SomeComp;
