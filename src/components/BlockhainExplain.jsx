import React, { useEffect } from "react";
import Data from "../images/Data.jpg";
import "./BlockhainExplain.css";
import "aos/dist/aos.css";
import Aos from "aos";

const BlockhainExplain = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-up">
      <h1 className="heading">
        <span className="cool-underline">Why AI-Health Ledger ??</span>
      </h1>
      <div className="content-wrapper">
        <div
          className="text-content"
          data-aos="fade-right"
          data-aos-offset="200"
        >
          <h1 style={{ width: "600px" }}>
            Your Data Is Secured On{" "}
            <span className="blue-text">Blockchain</span>
          </h1>

          <h3>
            No need to concern yourself with the exposure of your data in public
            or its inappropriate utilization.
          </h3>
          <br />

          <span className="block-span">
            <strong>🔒 Enhanced Security : </strong> Blockchain's decentralized
            architecture eliminates single points of failure, making it more
            resistant to data breaches and cyberattacks.
          </span>

          <br />

          <span className="block-span">
            <strong>🔎 Transparency : </strong> Every transaction on the
            blockchain is recorded and visible to all participants, creating a
            transparent and traceable record of your data's movement.
          </span>
          <br />

          <span className="block-span">
            <strong> 🙋‍♀️ Ownership: </strong> Blockchain puts you in control of
            your personal data. You decide who can access and use your
            information
          </span>
        </div>
        <div
          className="image-content"
          data-aos="fade-left"
          data-aos-offset="200"
        >
          <img src={Data} alt="" className="resized-image" />
        </div>
      </div>
    </div>
  );
};

export default BlockhainExplain;
