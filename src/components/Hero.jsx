import {Link,useLocation} from 'react-router-dom';
import React from 'react'
import './Hero.css'
import UserInfo from './UserInfo';
const Hero = () => {
  const location = useLocation();
  const isUserInfoPage = location.pathname === '/userinfo';
  return (
    <div>
    <div className="text-container">
      {isUserInfoPage ? (
        // Render content specific to the '/userinfo' page
        // <UserInfo/>
      <h1>Don't Worry your information is secured on blockchain</h1>
      ) : (
        // Render content for other pages
        <h1>Empowering HealthTech</h1>
      )}
      {isUserInfoPage ? null : (
        <p>
          <span className="blue-text">Secure</span>,{' '}
          <span className="blue-text">Personalized</span>, and{' '}
          <span className="blue-text">AI-Enhanced</span> Medical Solutions.
        </p>
      )}
    </div>
    {isUserInfoPage ? null : (
      <Link to="/userinfo">
        <button className="user_btn">Give it a shot</button>
      </Link>
    )}
  </div>
  )
}

export default Hero
