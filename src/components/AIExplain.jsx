import React,{useEffect} from 'react';
import AI from '../images/AI.jpg';
import './AIExplain.css';
import 'aos/dist/aos.css';
import Aos from 'aos'; 


const AIExplain = () => {

    useEffect(()=>{
        Aos.init();
    },[])

  return (
    <div >
    <div className="content-wrapper">
      <div className="image-content2" data-aos="fade-left" data-aos-offset="230">
        <img src={AI} alt="" className="resized-image2" />
      </div>
      <div className="text-content" data-aos="fade-right" data-aos-offset="230">
        <h1>Storing the data on blockchain</h1>
        <h3>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s,
        </h3>
        <br />
        <span className="block-span">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
        <br />
        <span className="block-span">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
        <br />
        <span className="block-span">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
      </div>
    </div>
    </div>
  );
};

export default AIExplain;
