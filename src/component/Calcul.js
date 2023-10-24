import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Calcul() {
const [exp,setExp]=useState('');


const clear=()=>{

 setExp('');
}

const result=()=>{
  try {
  let v=exp;
    setExp(eval(v));
    
   }
  catch(error){
    setExp('expression non valide')
  }
}
const tapecar=(e)=>{


let oldval=exp;
let newval=oldval+e.target.value;
setExp(newval);
}


  return (
    /* <link rel="stylesheet" href="">*/
    
    <div class="calculator card">
        <input value={exp} type="text" class="calculator-screen z-depth-1" disabled  />
        <div class="calculator-keys">
            <input onClick={(e)=>tapecar(e)} type="button" value="+" class="operator btn btn-info" />
            <input onClick={(e)=>tapecar(e)} type="button" value="-" class="operator btn btn-info" />
            <input onClick={(e)=>tapecar(e)} type="button" value="*" class="operator btn btn-info" />
            <input onClick={(e)=>tapecar(e)} type="button" value="/" class="operator btn btn-info" />
            
            <input onClick={(e)=>tapecar(e)} type="button" value="7" class="btn btn-light waves-effect"/>
            <input onClick={(e)=>tapecar(e)} type="button" value="8" class="btn btn-light waves-effect"/>
            <input onClick={(e)=>tapecar(e)} type="button" value="9" class="btn btn-light waves-effect"/>
            
            <input onClick={(e)=>tapecar(e)} type="button" value="4" class="btn btn-light waves-effect"/>
            <input onClick={(e)=>tapecar(e)} type="button" value="5" class="btn btn-light waves-effect" />
            <input onClick={(e)=>tapecar(e)} type="button" value="6" class="btn btn-light waves-effect"/>
            
            <input onClick={(e)=>tapecar(e)} type="button" value="1" class="btn btn-light waves-effect"/>
            <input onClick={(e)=>tapecar(e)} type="button" value="2" class="btn btn-light waves-effect"/>
            <input onClick={(e)=>tapecar(e)} type="button" value="3" class="btn btn-light waves-effect"/>

            <input onClick={(e)=>tapecar(e)} type="button" value="0" class="btn btn-light waves-effect"/>

            <input onClick={(e)=>tapecar(e)} type="button" value="." class="decimal function btn btn-secondary"/>
            
            <input onClick={clear} type="button" value="C" class="all-clear function btn btn-danger btn-sm"/>
            <input onClick={result} type="button" value="=" class="equal-sign operator btn btn-default"/>
            
        </div>
      
    </div>
  )
}
