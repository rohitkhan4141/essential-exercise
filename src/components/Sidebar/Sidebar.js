import React from "react";
import BreakBtn from "../BreakBtn/BreakBtn";
import DisplayExerciseInfo from "../DisplayExerciseInfo/DisplayExerciseInfo";
import MyInfo from "../MyInfo/MyInfo";
import "./Sidebar.css";

const Sidebar = ({ exerciceTime }) => {
  const breaks = [
    {
      id: 1,
      duration: 10,
    },
    {
      id: 2,
      duration: 20,
    },
    {
      id: 3,
      duration: 30,
    },
    {
      id: 4,
      duration: 40,
    },
  ];
  return (
    <div className='sidebar'>
      <MyInfo />
      <div className='btns-container'>
        <h2>Breaks</h2>
        <div className='breaks-btns'>
          {breaks.map((i) => (
            <BreakBtn break={i} key={i.id} />
          ))}
        </div>
      </div>
      <DisplayExerciseInfo exerciceTime={exerciceTime} />
    </div>
  );
};

export default Sidebar;
