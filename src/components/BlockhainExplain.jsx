import React, { useEffect } from 'react';
import Data from '../images/Data.jpg';
import './BlockhainExplain.css';
import 'aos/dist/aos.css';
import Aos from 'aos'; 

const BlockhainExplain = () => {
    useEffect(()=>{
        Aos.init();
    },[])
  return (
    <div className="content-wrapper">
      <div className="text-content"  data-aos="fade-right" data-aos-offset="250">
        <h1 >Storing the data on blockhain</h1>
        
        <h3>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h3>
        <br />

        <span className="block-span">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
        <br />

        <span className="block-span">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
        <br />

        <span className="block-span">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
      </div>
      <div className="image-content" data-aos = "fade-left" data-aos-offset="250">
        <img src={Data} alt="" className="resized-image" />
      </div>
    </div>
  );
}

export default BlockhainExplain;
