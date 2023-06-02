import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../App.css'
import SocialIcons from './SocialIcons';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <div className="subscription">
                <Form.Label id="subs">Subscribe for Newsletter</Form.Label>
                <InputGroup className="mb-3" style={{ width: '400px' }}>
                    <Form.Control
                        placeholder="Enter Email"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2" style={{ backgroundColor: 'darkred', color: 'white', borderStyle: 'none' }}>Subscribe</InputGroup.Text>
                </InputGroup>
            </div>
            <div className="links">
                <Link to=''>Privacy Policy</Link>
                <Link to=''>Privacy</Link>
                <Link to=''>Terms of Use</Link>
                <Link to=''>FAQs</Link>
                <Link to=''>Contact</Link>
            </div>
            <div className="follows">
                <p>Follow us :  </p>
                <SocialIcons />
            </div>
        </div>
    )
}

export default Footer
