import React from "react";
import "./App.css";
import Activity from "./components/Activity/Activity";

// Importing toastify module
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QAndA from "./components/QAndA/QAndA";

const App = () => {
  const notify = () => {
    toast.success("You have completed Your Activity");
  };

  return (
    <div>
      <Activity notify={notify} />
      <ToastContainer />
      <div className='qna-container'>
        <h2>Question And Answer</h2>
        <QAndA />
      </div>
    </div>
  );
};

export default App;
