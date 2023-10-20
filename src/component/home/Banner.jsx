import React from 'react'
import '../../style/home.css'
import Squtre from '../../assest/square.webp'
import Celend from '../../assest/pngwing.com.png'
import Circle from '../../assest/circle.png'
import { Button } from 'react-bootstrap'
import PartnerScroll from './PartnerScroll'
import { FaInstagram } from "react-icons/fa";
import { AiOutlineDribbble,AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

function Banner() {
    return (
        <div className='banner'>
            <section className='container'>
                <h1>Mobile App Development and Software Development Company</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sed minus molestiae omnis ut eos debitis accusamus culpa obcaecati praesentium.</p>
                <div className="start_btn">
                    <Button variant='primary'>Lets Start</Button>
                </div>
                <PartnerScroll />
            </section>
            <div className="square">
                <img src={Squtre} />
            </div>
            <div className="celender">
                <img src={Celend} />
            </div>
            <div className="circle">
                <img src={Circle} />
            </div>
            <div className='social_media'>
                <div className="item">
                    <p>Instagram</p>
                    <FaInstagram className='s_icon'/>
                </div>
                <div className="item">
                    <p>Facebook</p>
                    <BsFacebook className='s_icon'/>
                </div><div className="item">
                    <p>Twitter</p>
                    <AiOutlineTwitter className='s_icon'/>
                </div><div className="item">
                    <p>Dribble</p>
                    <AiOutlineDribbble className='s_icon'/>
                </div>
            </div>            
        </div>
    )
}

export default Banner