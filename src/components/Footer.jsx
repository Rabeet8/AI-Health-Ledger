// Footer.js
import React from 'react';
import "./Footer.css"
import { AiOutlineLinkedin, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='footer'>
      <h3 className='heading2'>Made by Syed Rabeet</h3>
      <div className='follow-container'>
        <h2 className='heading3'>Follow me:</h2>
        <div className='social-links'>
          <a href="https://www.linkedin.com/in/syedrabeet/" target="_blank" rel="noopener noreferrer">
            <AiOutlineLinkedin size={30} />
          </a>
          <a href="https://twitter.com/CuriousRabeet" target="_blank" rel="noopener noreferrer">
            <AiOutlineTwitter size={30} />
          </a>
          <a href="https://www.instagram.com/blockchain.brains/" target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
