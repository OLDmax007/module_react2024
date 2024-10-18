import React, {FC, useState} from 'react';
import './App.css';

const App: FC = () => {

    const state = useState()
    console.log(state) // [undefined or 'param', ƒ]

    const [arr, setArr] = useState([1,2,3,4,5])
    console.log(arr)

    const [users, setUsers] = useState([])
    console.log(users)


    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
            console.log(data)
        });


  return (
      <div className="App">
      </div>
  );
}

export default App;
