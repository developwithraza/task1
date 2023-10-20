import React, { useState } from 'react'
import Slider from 'react-slick';
import '../style/page.css'
import { service, testmon } from '../sourceData';
import { Card } from 'react-bootstrap';


function TestCardScroll() {

    const settings = {
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 800,
        arrows: false,
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
        <section className='scroll_test'>
            <Slider {...settings}>
                {testmon.map((data) => {
                    return (
                        <div className="test" key={data.id}>
                            <Card>
                                <Card.Img variant="top" src={data.Img_source} />
                                <Card.Body>
                                    <Card.Title className='name'>{data.name}</Card.Title>
                                    <Card.Title className='prop'>{data.prop}</Card.Title>
                                    <Card.Text className='test_dis'>
                                        {data.dec}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                    )
                })}
            </Slider>
        </section>
    )
}

export default TestCardScroll


