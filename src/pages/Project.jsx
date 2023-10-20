import React from 'react'
import '../style/page.css'
import Mob from '../assest/robo.png'
import { Button } from 'react-bootstrap'

function Project() {
    return (
        <div className='container'>
            <div className="project">
                <p>Our project</p>
                <h1>We are a new digital project development company</h1>
                <Button varient="primary">View Portfolio</Button>
            </div>
            <div className="robot">
                <img src={Mob} />
                <h1>Swipe left to right to view our project</h1>
            </div>
        </div>
    )
}

export default Project