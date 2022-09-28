import React from "react";
import "./BreakBtn.css";

const BreakBtn = (props) => {
  const { breakBtnHandlr } = props;
  const { duration } = props.break;
  return (
    <div className='break-btn' onClick={() => breakBtnHandlr(duration)}>
      <h4>{duration}s</h4>
    </div>
  );
};

export default BreakBtn;
