import React from 'react'
import "./TaskCard.css"
import Tag from './Tag'
import deleteIcons from '../assets/delete.png'
const TaskCard = ({name,tags}) => {
  return (
    <article className='task_card'>
    <p className='task_text'>{name}</p>
    <div className='task_card_bottom_line'>
        <div className='task_card_tags'>
       {
        tags.map((tag,index) =>(
          <Tag key={index} name={tag} selected/>)
       )}
        </div>
        <div className="task_delete">
            <img src={deleteIcons} alt=""
            className='delete_icon'></img> 

        </div>

     </div>
    </article>
  )
}

export default TaskCard