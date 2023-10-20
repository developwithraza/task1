import React from 'react'
import { dotList } from '../sourceData'
import { Card, Row, Col } from 'react-bootstrap'
import '../style/page.css'


function DotCard() {
    return (
        <div className='container'>
            <div className="cards">
                <Row>
                    {dotList.map((item) => {
                        return (
                            <Col md={4}>
                                <Card>
                                    <div className="card_item">
                                        <p>{item.title}</p>
                                        <img src={item.dot_img} />
                                    </div>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default DotCard