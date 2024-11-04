import React from 'react';

const Form = () => {


    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('dog')
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <label htmlFor="">
                <input type="text"/>
            </label>
            <button type={"submit"}>Ok</button>
        </form>
    );
};

export default Form;