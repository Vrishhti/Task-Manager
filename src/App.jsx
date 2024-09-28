//here we will add app componenets bcz its the main entry point for app cmponents heirarchy
import React, { useState, useEffect } from "react";

import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";




export const App = () => {
  const[tasks, setTasks]= useState([])
  console.log("tasks", tasks);
  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <header className='app_header'></header>
      <main className='app_main'>
        {/* js expression */}
        <TaskColumn name="To Do" icon={todoIcon} tasks={tasks} status="To Do"/>
        <TaskColumn name="In Progress" icon={doingIcon} tasks={tasks} status="In Progress"/>
        <TaskColumn name="Completed" icon={doneIcon} tasks={tasks} status="Compleetd"/>
      </main>
    </div>
  );
};
export default App; // This line ensures that App is exported as default

