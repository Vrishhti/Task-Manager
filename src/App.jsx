//here we will add app componenets bcz its the main entry point for app cmponents heirarchy
import React, { useState, useEffect } from "react";

import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const oldTasks =localStorage.getItem("tasks");

 const App = () => {
  // JSON.parse converts string to array

  const[tasks, setTasks]= useState(JSON.parse(oldTasks) || []);
  // useeffect hook accepts 2 args- 1. callback fn --->(tells what to run)- in which we write our sideeffect logic. this executes whenever something changes in this whole componenet
// 2. dependencies = array of variables (optipnal argument)---> tells when to run
// use effect runs on every render 
useEffect(()=>{
  // JSON.stringify converts tasks array to string format and also allows you to convert that str to array later if u want to use it
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
  
  console.log("tasks", tasks);

  //delete
  //delete task using index bcz each task has unique index
  const handleDelete= (taskIndex)=>{
    const newTask= tasks.filter((task, index)=> index!==taskIndex)
    setTasks(newTask)
  }
  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <header className='app_header'></header>
      <main className='app_main'>
        {/* js expression */}
        <TaskColumn 
        name="To Do" 
        icon={todoIcon} 
        tasks={tasks} 
        status="To Do"
        handleDelete={handleDelete} //passing handleDelete as prop to TaskColumn component to delete task on click of delete button
        />
        <TaskColumn 
        name="In Progress" 
        icon={doingIcon} 
        tasks={tasks} 
        status="In Progress"
        handleDelete={handleDelete} 
        />
        <TaskColumn 
        name="Completed" 
        icon={doneIcon} 
        tasks={tasks} 
        status="Compleetd"
        handleDelete={handleDelete} 
        />
      </main>
    </div>
  );
};
export default App; // This line ensures that App is exported as default
