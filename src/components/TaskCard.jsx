import React from 'react'
import "./TaskCard.css"
import Tag from './Tag'
import deleteIcons from '../assets/delete.png'
const TaskCard = ({name,tags, handleDelete, index}) => {
  return (
    <article className='task_card'
    draggable='true'>
    <p className='task_text'>{name}</p>
    <div className='task_card_bottom_line'>
        <div className='task_card_tags'>
       {
        tags.map((tag,index) =>(
          <Tag key={index} name={tag} selected/>)
       )}
        </div>
        {/* //to pass index value in handle delete fn use fat arrow fn */}
        <div className="task_delete" onClick={() =>handleDelete(index)}>
            <img src={deleteIcons} alt=""
            className='delete_icon'></img> 

        </div>

     </div>
    </article>
  )
}

export default TaskCard