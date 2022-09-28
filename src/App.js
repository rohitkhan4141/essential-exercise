import { useEffect, useState } from "react";
import "./App.css";
import Exercise from "./components/Exercise/Exercise";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  // states
  const [exercises, setExercises] = useState([]);
  const [selectExerciseItems, setSelectExerciseItems] = useState([]);

  //side effects
  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  const addToListHandlr = (selectedItems) => {
    setSelectExerciseItems([...selectExerciseItems, selectedItems]);
  };
  let exerciceTime = 0;
  for (const selectItem of selectExerciseItems) {
    exerciceTime = exerciceTime + selectItem.duration;
  }
  return (
    <div className='app'>
      <h1>Essential Exercises</h1>
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
        <Sidebar exerciceTime={exerciceTime} />
      </div>
    </div>
  );
}

export default App;
