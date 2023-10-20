import React, { useState } from 'react'
import '../style/page.css'
import { plates, service } from '../sourceData';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Plateform() {
    const handlemore = () => {
        prompt.apply('no any route')
    }

    return (
        <section className='container'>
            <div className="plateform">
                <div className="plte_title">
                    <h1>Plateforms</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, deleniti.</p>
                </div>
                <Row>
                    {plates.map((data) => {
                        return (
                            <Col className="plate" key={data.id}>
                                <Card style={{width:300}}>
                                    <Card.Img variant="top" src={data.Img_source} />
                                    <Card.Body>
                                        <Card.Title>{data.name}</Card.Title>
                                        <Card.Text>
                                            {data.dec}
                                        </Card.Text>
                                        <div className="read_more">
                                            <Link onClick={handlemore}>Read More</Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </section>
    )
}

export default Plateform


