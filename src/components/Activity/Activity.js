import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  addToLocalStorage,
  getDataFromLocalStorage,
} from "../../utilities/fakedb";
import Exercise from "../Exercise/Exercise";
import Sidebar from "../Sidebar/Sidebar";
import "./Activity.css";

function Activity({ notify }) {
  // states
  const [exercises, setExercises] = useState([]);
  const [selectExerciseItems, setSelectExerciseItems] = useState([]);
  const [breakTime, setBreakTime] = useState(0);

  //side effects
  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  useEffect(() => {
    const breakTime = getDataFromLocalStorage();
    if (breakTime) {
      setBreakTime(breakTime);
    } else {
      setBreakTime(0);
    }
  }, []);

  // click handlers
  const addToListHandlr = (selectedItems) => {
    setSelectExerciseItems([...selectExerciseItems, selectedItems]);
  };

  const breakBtnHandlr = (selectedTime) => {
    setBreakTime(selectedTime);
    addToLocalStorage(selectedTime);
  };

  // exercise time calculation
  let exerciceTime = 0;
  for (const selectItem of selectExerciseItems) {
    exerciceTime = exerciceTime + selectItem.duration;
  }

  return (
    <div className='activity'>
      <h1>
        <span className='title'>
          <FontAwesomeIcon icon={faDumbbell} />
        </span>
        Essential Exercises
      </h1>
      <div className='container'>
        <div className='exercises'>
          {exercises.map((exercise) => (
            <Exercise
              key={exercise.id}
              exercise={exercise}
              addToListHandlr={addToListHandlr}
            />
          ))}
        </div>
        {/* sidebar component */}
        <Sidebar
          exerciceTime={exerciceTime}
          breakBtnHandlr={breakBtnHandlr}
          breakTime={breakTime}
          notify={notify}
        />
      </div>
    </div>
  );
}

export default Activity;
