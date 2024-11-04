import React, {FormEvent, useState} from 'react';

const Form = () => {

    const [formState, setFormState] = useState<any>({
        fname: '',
        lname: '',
    })

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        console.log(formState)
    }

    const handleChangeFname = (e:FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        setFormState({...formState, fname: input.value})
    }

    const handleChangeLname = (e:FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        setFormState({...formState, lname: input.value})
    }


    console.log(formState)

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                <input type="text" name={'fname'} onChange={handleChangeFname}/>
            </label>

            <label htmlFor="">
                <input type="text" name={'lname'} onChange={handleChangeLname}/>
            </label>
            <button>Ok</button>
        </form>
    );
};

export default Form;