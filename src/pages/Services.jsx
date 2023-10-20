import React from 'react'
import ServiceCardScroll from './ServiceCardScroll'
import '../style/page.css'


function Services() {
  return (
    <div className='container'>
      <div className="services">
        <p>Make the future</p>
        <div className="divider">
          <div className="div1"></div>
          <div className="div2"></div>
        </div>
        <h1>Our Service</h1>
      </div>
      <ServiceCardScroll />
    </div>
  )
}

export default Services