import React from 'react'
import '../style/page.css'
import { BlogData } from '../sourceData'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { BsArrowRight } from "react-icons/bs";

function Blog() {
    return (
        <div className='container'>
            <div className="blog">
                <p>Latest Blog</p>
                <h1>From Out Blog</h1>
            </div>
            <Row>
                {BlogData.map((data) => {
                    return (
                        <Col className="blog_card" key={data.id}>
                            <Card>
                                <Card.Img variant="top" src={data.Img_source} />
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text>
                                        {data.dec}
                                    </Card.Text>
                                    <BsArrowRight className="rightArrow"/>
                                </Card.Body>
                            </Card>
                        </Col>

                    )
                })}
            </Row>
            <div className="blog_btn">
                <Button variant='primary' onClick={()=>alert("No Route Availabble")}>View More</Button>
            </div>
        </div>
    )
}

export default Blog