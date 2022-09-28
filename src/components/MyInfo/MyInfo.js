import React from "react";
import logo from "../../images/img.png";
import "./MyInfo.css";

const MyInfo = () => {
  return (
    <div className='my-info'>
      <img src={logo} alt='' />
      <h3>Mostakin Ahmed Khan</h3>
      <p>Full-stack Developer</p>
    </div>
  );
};

export default MyInfo;
