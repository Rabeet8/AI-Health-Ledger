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
          <h1 className="cool-underline" style={{ width: "570px" }}>
            Your Data Is Secured On{" "}
            <span className="blue-text">Blockchain</span>
          </h1>

          <h3>
            No need to concern yourself with the exposure of your data in public
            or its inappropriate utilization.
          </h3>
          <br />

          <span className="block-span">
            🔒 Blockchain's decentralized structure enhances security by
            reducing vulnerabilities to data breaches and cyberattacks.
          </span>

          <br />

          <span className="block-span">
            🔎 Blockchain records every transaction, ensuring transparent and
            traceable data movement for all participants.
          </span>
          <br />

          <span className="block-span">
            🙋‍♀️ Blockchain empowers you to control access and use of your
            personal data.
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
