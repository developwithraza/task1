import React, { useState } from 'react'
import Slider from 'react-slick';
import '../style/page.css'
import { service } from '../sourceData';
import { Card } from 'react-bootstrap';
import { BsArrowRight } from "react-icons/bs";


function ServiceCardScroll() {

    const settings = {
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 800,
        arrows: true,
        slidesToShow: 3,
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
        <section className='scroll_service'>
            <Slider {...settings}>
                {service.map((data) => {
                    return (
                        <div className="ser" key={data.id}>
                            <Card>
                                <Card.Img variant="top" src={data.Img_source} />
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text>
                                        {data.dec}
                                    </Card.Text>
                                    <BsArrowRight className='rightArrows'/>
                                </Card.Body>
                            </Card>

                        </div>
                    )
                })}
            </Slider>
        </section>
    )
}

export default ServiceCardScroll


