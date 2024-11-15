import React, { FC, memo } from 'react';

const SomeComp: FC<{ num: number; someFunc: () => void }> = memo(({ num, someFunc }) => {
    console.log('pes');

    return (
        <div>
            <p>{num}</p>
            <button onClick={someFunc}>Call Function</button>
        </div>
    );
});

export default SomeComp;
