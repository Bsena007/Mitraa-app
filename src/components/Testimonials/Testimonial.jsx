import React, { useRef } from 'react'//rface
import './Testimonial.css'
import Back from '../../assets/Back.png'
import Forward from '../../assets/Forward.png'
import unnamed from '../../assets/unnamed.png'
import AI_2 from '../../assets/AI-2.jpg'

const Testimonial = () => {

        const slider = useRef();
        let tx = 0;

        const slideForward =()=>{
            if(tx > -50){
                tx -= 25;
            }
            slider.current.style.transform = `translateX(${tx}%)`
        }
        const slideBackward =()=>{
            if(tx < 0){
                tx += 25;
            }
            slider.current.style.transform = `translateX(${tx}%)`
        }


  return (
    <div className='testimonial'>
      <img src={Back} alt="" className='back-btn' onClick={slideBackward}/>
      <img src={Forward} alt="" className='next-btn' onClick={slideForward} />
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={AI_2} alt="" />
                        <div>
                            <h3>Biswajit Sena</h3>
                            <span>Mitraa, INDIA</span>
                        </div>
                    </div>
                    <p>you can type or start a real-time voice 
                        conversation by tapping the soundwave icon 
                        in the mobile app. Click the web search icon 
                        to get fas</p>
                </div>
            </li>
             <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={AI_2} alt="" />
                        <div>
                            <h3>Biswajit </h3>
                            <span>Mitraa, INDIA</span>
                        </div>
                    </div>
                    <p>you can type or start a real-time voice 
                        conversation by tapping the soundwave icon 
                        in the mobile app. Click the web search icon 
                        to get fas</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={unnamed} alt="" />
                        <div>
                            <h3>Biswajit Sena</h3>
                            <span>Mitraa, INDIA</span>
                        </div>
                    </div>
                    <p>you can type or start a real-time voice 
                        conversation by tapping the soundwave icon 
                        in the mobile app. Click the web search icon 
                        to get fas</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={AI_2} alt="" />
                        <div>
                            <h3>Biswajit Sena</h3>
                            <span>Mitraa, INDIA</span>
                        </div>
                    </div>
                    <p>you can type or start a real-time voice 
                        conversation by tapping the soundwave icon 
                        in the mobile app. Click the web search icon 
                        to get fas</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonial
