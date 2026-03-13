import React from 'react'
import './News.css'
import AI_1 from '../../assets/AI-1.jpg'
import AI_2 from '../../assets/AI-2.jpg'
import AI_3 from '../../assets/AI-3.jpg'

const Program = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={AI_1} alt="" />
      </div>
      <div className='program'>
        <img src={AI_2} alt="" />
      </div>
      <div className='program'>
        <img src={AI_3} alt="" />
      </div>
    </div>
  )
}

export default Program
