import React, { useState } from 'react'
import Slider from 'react-slick';
import { parts } from '../../sourceData';
import '../../style/home.css'


function PartnerScroll() {

    const settings = {
        dots: false,
        adaptiveHeight: true,
        infinite: true,
        speed: 800,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        margin: 1,
        loop: true,
        autoplaySpeed: 3000,
        draggable: true,
        swipeToSlide: true,
        swipe: true,
    };

    return (
        <section className='scroll'>
            <Slider {...settings}>
                {parts.map((data) => {
                    return (
                        <div className="parts" key={data.id}>
                            <img src={data.Img_source} />
                           
                        </div>
                    )
                })}
            </Slider>
        </section>
    )
}

export default PartnerScroll


