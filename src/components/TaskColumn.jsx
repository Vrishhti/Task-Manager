import React from 'react'
import Todo from "../assets/direct-hit.png"
import "./TaskColumn.css"
import TaskCard from './TaskCard'

const TaskColumn = ({name,icon, tasks=[], status, handleDelete}) => {
  
    //destructuring props object to make the code cleaner and easier to read
  return (
    //using object destructring so that you dont have to write props.name props.title again and again
    <section className='task_column'>
        <h2 className='task_column_heading'>
            <img
            className='task_column_icon' 
            src={icon} alt=""/>{name}
            </h2>
           {
            // only if condn is true then taskcard componenent is returned slese u dont get anything
            tasks.map(
              (task, index) =>
                  task.status === status && (
                      <TaskCard
                          key={index}
                          name={task.task}
                          tags={task.tags}
                          handleDelete={handleDelete}
                          index={index} 
                          
                      />
                  )
          )}
      </section>
  )
}

export default TaskColumn