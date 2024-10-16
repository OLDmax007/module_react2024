import React, {FC} from 'react';
import './App.css';
import Products from "./components/Products/Products";

const App: FC = () => {
  return (
      <div className="App">
          <Products></Products>
      </div>
  );
}

export default App;
