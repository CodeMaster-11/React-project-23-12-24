// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const App=()=> {
  const[count, setTimeout]=useState(0);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={()=>setTimeout(count+1)}>Increment</button>
      <button onClick={()=>setTimeout(count-1)}>Decrement</button>
    </>
  );
}

export default App;
