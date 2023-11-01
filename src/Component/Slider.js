import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import data from './dataSlider'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1);
    const [counter, setCounter] = useState(0);

    const nextSlide = () => {
        if(slideIndex !== data.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === data.length){
            setSlideIndex(1)
        }
        incrementer();
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(data.length)
        }
        decrementer();
    }


    const incrementer =() => {
        let c= counter;
        c++;
        setCounter(c);
        }
       

    const decrementer=()=>{
        let c=counter;
        c--;
        setCounter(c);
    }



    return (
        <div className="container-slider">
            <h1>TP2_react</h1>
            <button className='btn'>{counter}</button>
            {data.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt="" 
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        </div>
    )
}