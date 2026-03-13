import React from 'react'
import './Career.css'
import unnamed from '../../assets/unnamed.png'
import AI_1 from '../../assets/AI-1.jpg'
import AI_2 from '../../assets/AI-2.jpg'
import AI_3 from '../../assets/AI-3.jpg'
import Arrow from '../../assets/Arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={unnamed} alt="" />
        <img src={AI_1} alt="" />
        <img src={AI_2} alt="" />
        <img src={AI_3} alt="" />
      </div>
      <button className='btn dark-btn'>See More Here
         <img src={Arrow} alt="" /></button>
    </div>
  )
}

export default Campus
