import React from "react";
import "./UserInfo.css";
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
        <label> Details</label>
        <textarea rows="6" placeholder="Type your message here" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default UserInfo;
