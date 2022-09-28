import React from "react";
import "./BreakBtn.css";

const BreakBtn = (props) => {
  const { duration } = props.break;
  return (
    <div className='break-btn'>
      <h4>{duration}s</h4>
    </div>
  );
};

export default BreakBtn;
