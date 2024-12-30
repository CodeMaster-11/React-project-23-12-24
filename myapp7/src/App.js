// import logo from './logo.svg';
import { createContext } from 'react';    // automatically imported
import './App.css';
import CompA from './compA';

const Name=createContext();     //after adding this 

const App=()=> {
  return (
    <>
    <Name.Provider value={'kaustubh'}>
        <CompA/>
    </Name.Provider>

    </>
  );
}

export default App;
export {Name};
