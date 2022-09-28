import React from "react";
import "./DisplayExerciseInfo.css";

const DisplayExerciseInfo = ({ exerciceTime }) => {
  return (
    <div className='DisplayExerciseInfo'>
      <h2>Exercise Details</h2>
      <h5 className='display-exercise-time'>Exercise Time : {exerciceTime}s</h5>
      <h5 className='display-exercise-time'>Break Time : </h5>
    </div>
  );
};

export default DisplayExerciseInfo;
