// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';



function App() {
  const[fullname,setFname]=useState({
    fname:'',
    lname:''
  });   

  const[Name,setFullname]= useState(
    {
      fname:'',
      lname:''
    }
  );

  const InputEvent=(e)=>{
    const n=e.target.name;
    const v=e.target.value;

    setFname((preValue)=>{
      if(n==='fname'){
        return{
          fname:v,
          lname:preValue.lname
        }
      }
      else{
        return{
          fname:preValue.fname,
          lname:v
        }
      }
    })
  }

 


  const buttonClickEvent=(a)=>{
    setFullname(fullname)
  }
  return (
    <>
         {/* <h1>Hello, {fullname.fname} {fullname.lname} </h1> */}
         <h1>Hello, {Name.fname} {Name.lname} </h1>
         <input type='text' placeholder='Enter your first name' name='fname' onChange={InputEvent}></input> <br></br> <br/>
         <input type='text' placeholder='Enter your last name' name='lname' onChange={InputEvent}></input>
         <button onClick={buttonClickEvent}>Submit</button>
    </>
  );
}

export default App;