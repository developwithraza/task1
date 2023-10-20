import React from 'react'
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import '../style/page.css'
import PlayCount from './PlayCount';

function WhoWeAre() {
    return (
        <div className='container'>
            <div className="who_we_are">
                <p>Who We Are</p>
                <h1>We are a new digital project Development agency</h1>
                <div className="down_aerro">
                    <BsFillArrowDownCircleFill className='down_arro'/>
                </div>
            </div>
            <PlayCount />

        </div>
    )
}

export default WhoWeAre