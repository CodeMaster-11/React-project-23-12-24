import './clock.css';
import { useState } from 'react';

function Clock(){
    //time related part
    var ctime= new Date().toLocaleTimeString();
    const[curtime,setCurTime]=useState(ctime); 
    const IncTime=()=>{
      var ctime= new Date().toLocaleTimeString();
        setCurTime(ctime);
        }
    setInterval(IncTime,1000)
    return(
        <>
        <div>
        <h1>{curtime}</h1>
        </div>
        </>
    )
}
export default Clock;