import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials = () => {
  
    const slider = useRef();
    let tx=0; 

    const slideForward = ()=> {
        if(tx > -50){
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }
     const slideBackward = ()=> {
     if(tx < 0){
        tx+=25;
     }
     slider.current.style.transform=`translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Mary Jones</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
             <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Wiliam Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Enrolling at Edusity has been a life-changing experience. The faculty's dedication, combined with innovative teaching methods, has helped me grow. I feel confident and prepared for the future thanks to Edusity.</p>
                </div>
            </li>
             <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Agatha Smith</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>My journey at Edusity has been nothing short of inspiring. From hands-on learning experiences to a vibrant campus life, every aspect has contributed to my overall development. It’s a place where learning is both enjoyable and meaningful.</p>
                </div>
            </li>
             <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Henry Brown</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Being a part of Edusity has been an incredible privilege. The emphasis on holistic education, access to cutting-edge resources, and an encouraging environment have helped me unlock my full potential. I couldn’t have asked for a better place to pursue my studies.</p>
                </div>
            </li>
         </ul>
      </div>
    </div>
  )
}

export default Testimonials
