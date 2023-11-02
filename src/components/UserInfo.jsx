import React, { useState } from "react";
import "./UserInfo.css";
require ('dotenv').config(); 
import { Link } from 'react-router-dom';
// Import the Pinata library properly
// import pinataSDK from '@pinata/sdk';
// const pinataSDK = require("@pinata/sdk");
const UserInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

  //   const formData = {
  //     name,
  //     email,
  //     age,
  //     gender,
  //   };


  //   const formDataString = JSON.stringify(formData);


const {PINATA_API_KEY,PINATA_SECRET_KEY} = process.env;



    // const pinata = pinataSDK(PINATA_API_KEY, PINATA_SECRET_KEY);

  //   try {
  //     const result = await pinata.pinJSONToIPFS(formDataString);
  //     console.log('IPFS CID:', result.IpfsHash);
  //     // You can save the CID or use it as needed
  //   } catch (error) {
  //     console.error('Error uploading to IPFS:', error);
  //   }
  };

  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Age</label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
   
        <div className="form_btn-container">
          <button className="form_btn" onClick={handleFormSubmit}>Submit</button>
          <Link to='/gptinterface'>
            <button className="form_btn">Next</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
