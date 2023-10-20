import React from 'react'
import '../style/page.css'
import { Col, Row } from 'react-bootstrap'
import { MdCall ,MdAccessTime} from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


function Footer() {
  return (
    <div className='container'>
        <div className="footer_title">
            <h1>We Develop Digital Future Want to Join ?</h1>
        </div>
        <Row>
            <Col md={4} className='first'>
                <p>Lorem IPSUM</p>
                    <li>link one</li>
                    <li>link two</li>
                    <li>link three</li>
                    <li>link four</li>
            </Col>
            <Col md={4} className='first'>
            <p>Lorem IPSUM</p>
                    <li>link one</li>
                    <li>link two</li>
                    <li>link three</li>
                    <li>link four</li>
            </Col>
            <Col md={4} className='first'>
            <p>Contact</p>
                    <li><MdCall className='ic'/>6200820423</li>
                    <li><FaWhatsapp className='ic'/>6200820423</li>
                    <li><AiOutlineMail className='ic'/>reyantabis105@gmail.com</li>
                    <li><MdAccessTime className='ic'/>Opening hours 10:00 AM to 07:00 PM</li>
            </Col>
        </Row>
        <hr style={{color:"white"}}></hr>
        <div className="footer_bottom">
            <p>© Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, fugiat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, fugiat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum explicabo unde perspiciatis error officia non vero illum et dolorem quaerat.</p>
        </div>
        <Row>
            <Col md={6} className='footbtn'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, amet ullam esse ipsum inventore expedita, sapiente a nostrum temporibus voluptatem, aspernatur ab in. Adipisci voluptatem quo fugiat quaerat quia inventore, unde ipsum quis perferendis vitae cumque mollitia ducimus. Nesciunt, maiores.lorem20</p>
            </Col>
            <Col md={6}  className='footbtn'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, amet ullam esse ipsum inventore expedita, sapiente a nostrum temporibus voluptatem, aspernatur ab in. Adipisci voluptatem quo fugiat quaerat quia inventore, unde ipsum quis perferendis vitae cumque mollitia ducimus. Nesciunt, maiores.lorem20</p>
            </Col>
        </Row>
        <div className="copy">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, adipisci?</p>
        </div>
    </div>
  )
}

export default Footer