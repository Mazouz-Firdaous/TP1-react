import React, { useRef, useState } from 'react';

export default function Explorer() {
// declaration des hooks : 

const cod=useRef();

const res=useRef();

const loisirs=useRef([])


const addtoref=(e)=>{

    loisirs.current.push(e)
}




const interpreter=()=>{

res.current.innerHTML=cod.current.value
// document.getElementById
}



const checkall=()=>{

for(let i=0;i<loisirs.current.length;i++)
{
    loisirs.current[i].checked=true
}


}


const ucheckall=()=>{

    for(let i=0;i<loisirs.current.length;i++)
    {
        loisirs.current[i].checked=false
    }
    
    
    }

    const selvalues=()=>{
let ch='';
        for(let i=0;i<loisirs.current.length;i++)
        {
           
           
           if(loisirs.current[i].checked==true)
           {
            ch+='***'+loisirs.current[i].value
           }
        }
        alert(ch)
        
        }










        // declaration des states : 
  
  const [sexe,setSexe]=useState('M');
  const [ville,setVille]=useState('');
  
  const[villes,setVilles]=useState(['TAnger','Tetouan','Assilah']);
  
  const addcity=()=>{
  
  let nvilles=[...villes,ville];
  
  setVilles(nvilles);
  }
  

  return (
    <div>
    <h1>    Exemple 1 useRef : </h1>

<textarea    onChange={interpreter}  ref={cod} name="" id="" cols="50" rows="10"></textarea>

<div   ref={res} style={{ width:'200px',height: '200px', border: '1px solid #000' }}></div>


<h1>    Exemple 2 useRef (checkbox) : </h1>

  Loisirs : 

  <input ref={addtoref} type="checkbox" value='Sport' /> Sport
  <input ref={addtoref} type="checkbox" value='music' /> Music
  <input ref={addtoref} type="checkbox" value='Travel' /> Travel

<br />     <br />    <br />


<input   type="button" value='Check all'    onClick={checkall} />

<input   type="button" value='unCheck all'    onClick={ucheckall} />      

<input   type="button" value='selected Values'  onClick={selvalues}    />      






  
  <h1>   {sexe}</h1>
  sexe :     <input type="radio" name='se'   onClick={(e)=>setSexe(e.target.value)}   value='M'      /> M
  
             <input type="radio" name='se' onClick={(e)=>setSexe(e.target.value)}    value='F'      /> F
  
  
  <br />   <br />
  
  Ajouter ville :
  <input type="text"   onChange={(e)=>setVille(e.target.value)} /> 
  
  <input type="button" value="ajouter"   onClick={addcity}    />
  
  Choisir une ville : 
  
  <select name="" id="">
  
  {
  villes.map((v,ind)=>{
  
  return  <option   key={ind} value={v}>{v}</option>
  
  
  })
  
  
  
  }
  
  
  
  
  
  </select>
        
  </div>
  )
}






