import React from "react";
import slide1 from '../assets/images/slider/1.jpg';
import slide2 from '../assets/images/slider/2.jpg';
import slide3 from '../assets/images/slider/3.jpg';

const Learning = () =>{
    return (
        <div className="slider-container">
            <div className="slide">
                <img src={slide1} alt="banner-img"/>
            </div>
            <div className="slide">
                <img src={slide2} alt="banner-img"/>
            </div>
            <div className="slide">
                <img src={slide3} alt="banner-img"/>
            </div>
        </div>
    )
}

export default Learning;