import React from "react";
import "./UserInfo.css";
import {Link} from 'react-router-dom';
const UserInfo = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Age</label>
        <input type="text" />
        <label  for="gender">Gender:</label>
        <select id="gender" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
   
        <div className="form_btn-container">
          <button className="form_btn">Submit</button>
          <Link to='/gptinterface'>
          <button className="form_btn">Next</button>
          </Link>
        </div>

      </form>
    </div>
  );
};

export default UserInfo;
