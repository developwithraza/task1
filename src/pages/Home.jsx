import React from 'react'
import '../App.css'
import HeroBanner from '../assest/hero_banner.jpg'
import { Col, Row } from 'react-bootstrap'
import Left_img from '../assest/slid_left.jpg'
import Right_img from '../assest/right_side.jpg'
import Right_imgs from '../assest/left_2.jpg'
import Left_imgs from '../assest/right_3.jpg'
import Img_1 from '../assest/img_1.jpg'
import Img_2 from '../assest/img_2.jpg'
import Img_3 from '../assest/img_3.jpg'
import OurProduct from './OurProduct'

function Home() {
  return (
    <>
      <div className='home'>
        <img src={HeroBanner} alt='hero banner' />
      </div>
      <div className="gallay_img">
        <Row style={{ margin: "0" }}>
          <Col md={7} className='left'>
            <img src={Left_img} />
            <div className="left_content">
              <p>Bam Bi No instant pasta</p>
              <h3>Want Something Real ? </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, a.</p>
              <button>Read More</button>
            </div>
          </Col>
          <Col md={5} className='right'>
            <img src={Right_img} />
            <div className="right_content">
              <p>Bam Bi No instant pasta</p>
              <h3>bambino Macaroni pep Elbows </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, a.</p>
              <button>Read More</button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="gallay_img1">

        <Row style={{ margin: "10px 0" }}>
          <Col md={7}>
            <Row style={{ margin: "0 -10px" }}>
              <Col md={6} className='img_1'>
                <img src={Img_1} />
                <p>Healthy Pasta !!!</p>
              </Col>
              <Col md={6} className='img_1'>
                <img src={Img_2} />
                <p>Best For any time ....</p>

              </Col>
            </Row>
          </Col>
          <Col md={5} className='img_1'>
            <img src={Img_3} />
            <p>How bring pasta to your plate ?</p>

          </Col>
        </Row>
      </div>
      <OurProduct />
      <section className='pastastory'>
        <h1>Pasta Story</h1>
        <Row style={{margin:"0"}}>
          <Col md={6} className="left_side_img" >
            <img src={Right_imgs} />
          </Col>
          <Col md={6} className="right_side_img" >
            <img src={Left_imgs} />
            <div className="content_data">
              <p>Welocme</p>
              <h2>The Speciality of The House</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis quaerat in neque non numquam distinctio quam, nisi excepturi. Dicta.</p>
              <button >Know More</button>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Home
