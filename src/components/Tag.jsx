import React from 'react'
import './Tag.css'

// for accessing props value pass props as a parameter in tag fn
// this props is an obj which conatins all values of attri in tag component
const Tag = ({name, selectTag, selected}) => {
  //inline style bcz we want to give diff colour to seperate tags
  const tagStyle ={
    Priority: {backgroundColor: "#fda821"},
    Personal: {backgroundColor: "#15d4c8"},
    Work: {backgroundColor: "#ffd12c"},
    Optional: {backgroundColor: "#4cdafc"},
    default:{backgroundColor: "#f9f9f9"}

    
  }
// console.log("props",props)
  return (
    // since button tag is used multiple times so store single tag in different mponent

    //selectTag fn runs on each tag click
    <button 
    type='button' 
    className='tag' 
    style={selected ? tagStyle[name]: tagStyle.default}
    onClick ={()=> selectTag(name)}>
    {name}
    </button>
)
}

export default Tag