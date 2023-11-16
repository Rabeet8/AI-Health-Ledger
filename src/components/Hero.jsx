import {Link,useLocation} from 'react-router-dom';
import React, { useEffect } from 'react'
import './Hero.css'
import BlockhainExplain from './BlockhainExplain';
import AIExplain from './AIExplain';
import FAQs from './FAQs';
import Footer from './Footer';
// import { Fade } from 'react-reveal';

// import UserInfo from './UserInfo';


const Hero = () => {

  // const location = useLocation();
  // const isUserInfoPage = location.pathname === '/userinfo';

  // useEffect(()=>{
  //   Aos.init();
  // })

  return (
    <div>
      {/* <br /> */}
    
    <div className="text-container">
      {/* {isUserInfoPage ? (
    
      <h1>Don't Worry your information is secured on blockchain</h1>
      ) : (
       
        <h1>Empowering HealthTech</h1>
      )} */}
      {/* {isUserInfoPage ? null : ( */}
      <h1>Empowering HealthTech</h1>

        <p  className="tag-line fade-left">
          <span className="blue-text">Secure</span>,{' '}
          <span className="blue-text">Personalized</span>, and{' '}
          <span className="blue-text">AI-Enhanced</span> Medical Solutions.
        </p>
      {/* )} */}
    </div>
    {/* {isUserInfoPage ? null : ( */}
      <Link to="/userinfo">
        <button className="fade-left user_btn">Give it a shot</button>
      </Link>
    {/* )} */}
 
<BlockhainExplain/>

<AIExplain/>
<div data-aos="fade-right" >
<h1 className="heading4">
        <span className="cool-underline">Your Feedback</span>
        
      </h1>
      <span style={{color: 'white'}}className='feedback_span'>Your thoughts matter to us! Click here to share your feedback and help us make your experience even better </span>
      <br/>
      <br/>

      <Link to="/feedback">
        <button className="fade-left user_btn">Share Your Thoughts</button>
      </Link>
  </div>
<FAQs/>
<Footer/>
  </div>
  )
}

export default Hero
