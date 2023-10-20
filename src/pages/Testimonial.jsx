import React from 'react'
import ServiceCardScroll from './ServiceCardScroll'
import '../style/page.css'
import TestCardScroll from './TestCardScroll'


function Testimonial() {
  return (
    <div className='container'>
      <div className="testmon">
        <p>Testmonials </p>
        <div className="divider">
          <div className="div1"></div>
          <div className="div2"></div>
        </div>
        <h1>What our claient say</h1>
        <div className="client">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate corporis iste est fugit, fugiat veritatis pariatur sit inventore aliquid laudantium?</p>
        </div>
      </div>
      <TestCardScroll />
    </div>
  )
}

export default Testimonial