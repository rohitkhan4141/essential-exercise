import React from "react";
import BreakBtn from "../BreakBtn/BreakBtn";
import DisplayExerciseInfo from "../DisplayExerciseInfo/DisplayExerciseInfo";
import MyInfo from "../MyInfo/MyInfo";

const Sidebar = () => {
  return (
    <div>
      <MyInfo />
      <div>
        <BreakBtn />
      </div>
      <DisplayExerciseInfo />
    </div>
  );
};

export default Sidebar;
