import React, {FormEvent, useState} from 'react';

const Form = () => {

    const [formState, setFormState] = useState<any>({})

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement;
        console.log(form.fname.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                <input type="text" name={'fname'}/>
            </label>

            <label htmlFor="">
                <input type="text" name={'lname'}/>
            </label>
            <button>Ok</button>
        </form>
    );
};

export default Form;