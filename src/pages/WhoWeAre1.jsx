import React from 'react'
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import '../style/page.css'
import PlayCount from './PlayCount';
import { Button } from 'react-bootstrap';
import DotCard from './DotCard';

function WhoWeAre1() {
    return (
        <div className='container'>
            <div className="who_we_are1">
                <p>Who We Are</p>
                <h1>Best Mobile Application Development in USA , Caneda , & India</h1>
                <div className="abouts">
                    <Button value='primary' >About Us</Button>
                </div>
            </div>
            <DotCard />

        </div>
    )
}

export default WhoWeAre1