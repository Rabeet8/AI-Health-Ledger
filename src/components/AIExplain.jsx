import React, { useEffect } from "react";
import AI from "../images/AI.jpg";
import "./AIExplain.css";
import "aos/dist/aos.css";
import Aos from "aos";

const AIExplain = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <div className="content-wrapper">
        <div
          className="image-content2"
          data-aos="fade-left"
          data-aos-offset="230"
        >
          <img src={AI} alt="" className="resized-image2" />
        </div>
        <div
          className="text-content"
          data-aos="fade-right"
          data-aos-offset="230"
        >
          <h1 className="cool-underline"style={{ width: "615px" }}>
            Empowering Medical Diagnosis With{" "}
            <span className="blue-text">AI</span>
          </h1>
          <h3>
            AI technology is being used to enhance the accuracy of
            medical diagnoses, ensuring more precise results for
            individuals' health assessments.
          </h3>
          <br />
          <span className="block-span">
          📊 AI systems leverage extensive medical data for precise diagnoses, minimizing errors.
          </span>
          <br />
          <span className="block-span">
          🕒 AI expedites diagnoses by swiftly assessing medical images and patient data.
          </span>
          <br />
          <span className="block-span">
          🌐 AI-driven diagnostics extend healthcare access to remote and underserved regions.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AIExplain;
