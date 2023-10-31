import React, {useState} from 'react';
import './Tpslide.css';
import BtnSlider from './BtnSlider';
import dataSlider from '../dataSlider';

export default function Tpslider() {   
//declaration du state 
    const [index,setindex]=useState(1);    
    const nextSlide = () => {
    if(index !== dataSlider.length ){
        setindex(index + 1)     
    }
    else if (index === dataSlider.length ){
        setindex(1)
    }
}
    const prevSlide = () => {
        if(index !== 1 ){            setindex(index-1)       }
        else if (index === 1 ){            setindex(5)        }
  }   

    return (
        <div className="container-slider">
            {dataSlider.map((obj) => {             
                return (
                    <div   key={obj.id}          className={"slide"}    >
<h1>{index}</h1>
              
               
              <img src={process.env.PUBLIC_URL + `/Imgs/img${index}.jpg`} alt="" />
            
          </div>
          
      )
  })}
  <BtnSlider moveSlide={nextSlide} direction="next"/>
  <BtnSlider moveSlide={prevSlide} direction="prev"/>

 
</div>
)
}
