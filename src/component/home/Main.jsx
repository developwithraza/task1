import React from 'react'
import '../../style/home.css'
import Navbars from './Navbars'
import Banner from './Banner'
import WhoWeAre from '../../pages/WhoWeAre'
import WhoWeAre1 from '../../pages/WhoWeAre1'
import Services from '../../pages/Services'
import Testimonial from '../../pages/Testimonial'
import Plateform from '../../pages/Plateform'
import Project from '../../pages/Project'
import Blog from '../../pages/Blog'
import Footer from '../../pages/Footer'

function Main() {
    return (
        <>
            <section className='main'>
                <Navbars />
                <Banner />
            </section>
            <section className='who'>
                <WhoWeAre />
            </section>
            <section className='who1'>
                <WhoWeAre1 />
            </section>
            <section className='service'>
                <Services />
            </section>
            <section className='service'>
                <Testimonial />
            </section>
            <section className='service'>
                <Plateform />
            </section>
            <section className='service'>
                <Project />
            </section>
            <section className='service'>
                <Blog />
            </section>
            <section className='service'>
                <Footer />
            </section>
        </>
    )
}

export default Main