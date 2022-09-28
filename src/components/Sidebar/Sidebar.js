import React from "react";
import BreakBtn from "../BreakBtn/BreakBtn";
import DisplayExerciseInfo from "../DisplayExerciseInfo/DisplayExerciseInfo";
import MyInfo from "../MyInfo/MyInfo";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <MyInfo />
      <div>
        <BreakBtn />
      </div>
      <DisplayExerciseInfo />
    </div>
  );
};

export default Sidebar;
