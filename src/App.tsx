import React from 'react';
import useFetch from "./hooks/useFetch";
import {IPost, IProduct, IUser} from "./models/BasicModels";





const App = () => {


    const products = useFetch<IProduct[]>('products')
    const users = useFetch<IUser[]>('users')
    const posts = useFetch<IPost[]>('posts')



    console.log('--------------')
    console.log(products)
    console.log(users);
    console.log(posts);


    return (
        <div>
            
        </div>
    );
};

export default App;