import React from 'react';
import './slider.css';
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
const Slider =(props)=>{
    const slideLeftt =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 200;
    }

    const slideRightt =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 200;
    }

    return(
        <div id="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeftt}/>
            <div id="slider">
               { 
                props.slides.map((slide,index)=>{
                        return(
                            <div className="slider-card" key={index} onClick={()=>slide.clickEvent()}>
                                <div className="slider-card-image" style={{backgroundImage:`url(${slide.image})`,backgroundSize:'cover'}}></div>
                                <p className="slider-card-title">{slide.title}</p>
                                <p className="slider-card-description">{slide.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRightt}/>
        </div>
    )
}
export default Slider;