import React from 'react'
import { counts } from '../sourceData'
import CountUp from 'react-countup'
import '../style/page.css'


function PlayCount() {
  return (
    <div className='container'>
      <div className="counter">
        {counts.map((item) => {
          return (
            <div className='counts' key={item.id}>
              <CountUp end={item.count} className='countup' />
              <p>{item.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PlayCount