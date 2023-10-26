import {Link,useLocation} from 'react-router-dom';
import React from 'react'
import './Hero.css'
const Hero = () => {
    const location = useLocation();
  return (
    <div>
     
      <div className="text-container">

      <h1 >Empowering HealthTech </h1>
      <p><span class="blue-text">Secure</span> , <span class="blue-text">Personalized </span>, and <span class="blue-text">AI-Enhanced</span> Medical Solutions.</p>



    
      </div>
       {location.pathname !== '/userinfo' && (
        <Link to="/userinfo">
          <button className='user_btn'>Give it a shot</button>
        </Link>
      )}
    </div>
  )
}

export default Hero
