import { useEffect, useState } from "react";
import "./App.css";
import Exercise from "./components/Exercise/Exercise";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);
  return (
    <div>
      <h1>Essential exercise</h1>
      <div>
        <div className='exercises'>
          {exercises.map((exercise) => (
            <Exercise key={exercise.id} exercise={exercise} />
          ))}
        </div>
        {/* sidebar component */}
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
