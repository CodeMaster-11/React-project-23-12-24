import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  var count = 0
  const[curval,setCurVAl]=useState(count)
  const inVal=()=>{
      setCurVAl(curval+1)
  }
  const decVal=()=>{
      setCurVAl(curval-1)
  }
  return (
   
   <>
      <div>
      <h1>{curval}</h1>
      <button onClick={inVal}> 👍 </button>
      <button onClick={decVal}> 👎 </button>
      </div>
   </>
  );
}

export default App;
