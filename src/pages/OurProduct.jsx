import React from 'react'
import { product } from './productjson'
import { Col,Row } from 'react-bootstrap'
import '../App.css'

function OurProduct() {
    return (
        <div className='container'>
            <section className='product'>
                <h1>Our Product</h1>
                <Row>
                    {product.map((item, index) => {
                        return (
                            <Col md={4} key={index} className='product_item'>
                                <img src={item.img_src} />
                                <h4>{item.title}</h4>
                                <p>{item.des}</p>
                                <button>Read More</button>
                            </Col>
                        )
                    })}
                </Row>
            </section>
        </div>
    )
}

export default OurProduct
