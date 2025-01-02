// import logo from './logo.svg';
import { createContext } from 'react';    // automatically imported
import './App.css';
import CompA from './compA';

const Name=createContext();     //after adding this 
const Name1=createContext();     //after adding this 

const App=()=> {
  return (
    <>
    <Name.Provider value={'ITVEDANT'}>
      <Name1.Provider>
        <CompA/>
      </Name1.Provider>
    </Name.Provider>

    </>
  );
}

export default App;
export {Name};