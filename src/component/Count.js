import React, { useState } from 'react'
import "./Tp.css";
import im from './apple.PNG';
export default function Count() {

  const [counter,setcounter]=useState(0);
  const incrementer=()=>{
    let c = counter;
    c++;
    setcounter(c);
  }
  
  const decrementer=()=>{
    let c = counter;
    c--;
    setcounter(c);
  }
  

  return (
    <div>
      <h1>Exemple du State</h1>
      <br/>
      <img src={im} alt="" />
      <br />
      <input type="button" value="-" onClick={decrementer} className='btn btn-info'/>
        la valeur du state est    {counter}           
      <input type="button" value="+" onClick={incrementer} className='btn btn-info'/>



      <br />
      <br />

      
    </div>
  )
}



