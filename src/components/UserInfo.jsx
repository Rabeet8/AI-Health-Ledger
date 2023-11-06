import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserInfo.css";
// require("dotenv").config();
import Alert from 'react-bootstrap/Alert';
const pinataSDK = require("@pinata/sdk");

const UserInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [isSuccessAlertVisible, setIsSuccessAlertVisible] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      age,
      gender,
    };

    // const formDataString = JSON.stringify(formData);

    // const { PINATA_API_KEY, PINATA_SECRET_KEY } = process.env;

    const PINATA_API_KEY = "9eb7740b03abd9c6c621";
    const PINATA_SECRET_KEY =
      "85a201e3d0c42faf779f96f8b2b4d04b24307301e717f3236b4655faf6189d0e";

    const pinata = new pinataSDK(PINATA_API_KEY, PINATA_SECRET_KEY);

    try {
      const result = await pinata.pinJSONToIPFS(formData);
      console.log("IPFS CID:", result.IpfsHash);
      console.log(result);
      showSuccessAlert();
    } catch (error) {
      console.error("Error uploading to IPFS:", error);
    }
  };

  const showSuccessAlert = () => {
    setIsSuccessAlertVisible(true);
  };

  return (
    
    <div className="form">
      {isSuccessAlertVisible && (
            <div className="success-alert">
              Your data is now stored on the blockchain.
            </div>
          )}
      <form>
        <label>Your Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Age</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <div className="form_btn-container">
          <button className="form_btn" onClick={handleFormSubmit}>
            Submit
          </button>
         
          <Link to="/gptinterface">
            <button className="form_btn">Next</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
