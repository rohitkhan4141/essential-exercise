import React from "react";
import "./Exercise.css";

const Exercise = ({ exercise, addToListHandlr }) => {
  const { picture, name, duration, details } = exercise;
  return (
    <div className='exercise'>
      <img src={picture} alt='exercice-img' />
      <div className='exercise-info'>
        <h3>{name}</h3>
        <p>{details}</p>
        <h5>Duration: {duration}s</h5>
        <button className='btn' onClick={() => addToListHandlr(exercise)}>
          <p>Add To List</p>
        </button>
      </div>
    </div>
  );
};

export default Exercise;
