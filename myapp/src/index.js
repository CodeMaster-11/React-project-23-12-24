import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Ydata from './ydata';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './cards';

// function ncard(val){
//   return(
//     <>
//        <Card imgsrc={val.imgsrc} link={val.link} title={val.title}></Card>
//     </>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
 
{
  Ydata.map((val)=>{
    return(
      <Card imgsrc={val.imgsrc} link={val.link} title={val.title}></Card>

      )
  })
}
</>
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
