//react works on component based approach
//we use usestate hook to get user input

import React , {useState} from 'react'
import './TaskForm.css'
import Tag from './Tag'
const TaskForm=({setTasks}) => {

    // Here state var is taskDatat and setTaskData and
    // default value is obj with properties in key val pair 
    const [taskData, setTaskData]= useState({
        //this is the task property
        //when we type in from field first we get that field's name and value (name="task") and that name will be same as this task data prop
        // and its value is replaced by whatever task we are adding
        task: "",
        //status property
        status: "To Do",
        //when we sleect any tag, we add that tag in the array, if the tag is already in this array we remove that tag
        tags:[]
    });

    //we call this fn on every i/p's onchange event
    //e is the event obj for all the fields
    const handleChange =(e)=>{

        //using obj destructuring this is the name and value-> (name="task") 

        const{name,value}= e.target;
        
        // // this gives us field name and its value ->(task make coffee)
        // // where task=field  name which is equal to the task property
        // //make coffee is the value of the task property
        // // we want to set this value inside statevariable related to its property name
        // console.log(name, value);

        //prev value is same as current taskData value
        setTaskData(prev =>{
            //return all prev value using spread operator (...)
            //whatever you return from ...prev that will be the value of our stattevariable

            //so now if we write anything in task i/p so first ...prev returns all prev properties
            // And then you find name thats is the prop task and then replace task with its task values
            return {...prev, [name]: value}
        })
    };

    const handleSubmit =(e) =>{
        //to prevent form from refreshing after submitting
        e.preventDefault();
        console.log(taskData);
        //set taskData in setTask fn
        setTasks(prev=>{
            return [...prev, taskData]
        })
        setTaskData({
            task: "",
            status: "To Do",
            tags:[]
        });
    }
  

    const selectTag =(tag)=>{
        //some method return true or false value
        //so we check each item of taskdata.tags[] and compare that with  tag name
        //if we select HTML tag then this expression will check each value of that tag and if HTML is avl in the array it returns true else false
        if(taskData.tags.some(item=> item === tag)){

            //if tag is already avl, remive that from array
            //filter method return a new array so store it in var filterTags
            const filterTags= taskData.tags.filter(item=> item !== tag)
            //update tags value with filterTags
            setTaskData(prev=>{
                //overwrite tags to filterTags
                return {...prev, tags: filterTags}
            })
        }
        //if tags not avl
            else{
                setTaskData(prev=>{
                    return {...prev, tags:[...prev.tags, tag]}
            })
        }
    };
console.log(taskData.tags)

    //for colour changing tags if its selected (present in arr or not)
        const checkTag=(tag)=>{
            return taskData.tags.some(item => item===tag)        }

          
             

    // // state variable
    // // when something chnages in our input we set that value in task state
    // const [task,setTask]= useState("")
    // // this state variable is used to store vale of current state. 
    // const [status, setStatus] = useState("todo")

    // //whatever val we pass in settask fn it will be the value of our task state

    // // we have to use arrow fn syntax otherwise this will not get even obj
    // const handleTaskChange = e=> {
    //     setTask(e.target.value)
    // };
    // const handleStatusChange = e=> {
    //     setStatus(e.target.value)
    // };
    // console.log(task, status)


  return (
    <header className='app_header'>
        <form onSubmit={handleSubmit}> 
           <input type="text"
        // we want to store tasks i/p value in the task property mentioned above in the obj
           name='task'
           className='task_input'
           placeholder='Enter your task'
           onChange={handleChange}
           value={taskData.task}
        />
           <div className='task_form_bottom_line'>
            {/* whatever val u pass in setTask fn it will val of task state */}
            <div>
                {/* //name is and attribute and HTML is a string value 
                name   ="HTML" is a prop being passed to the TAG component*/}

                {/* THIS IS HOW YOU PASS ATTRIBUTES TO COMPONENETS */}

                {/* for accessing value of props you add props parameter in tag fn in tag.jsx */}
            <Tag name="Priority" selectTag={selectTag} selected={checkTag ("Priority")}/>  
            <Tag name="Personal"  selectTag={selectTag} selected={checkTag ("Personal")}/>             
            <Tag name="Work"  selectTag={selectTag} selected={checkTag ("Work")}/>             
            <Tag name="Optional"  selectTag={selectTag} selected={checkTag ("Optional")}/>             
            </div>
            <div>
            <select 
        // we want to set status value in the status property mentioned above in the obj

            name='status'
            className='task_status'
            onChange={handleChange}
            value={taskData.status}>
                <option value='To Do'>To Do</option>
                <option value='In Progress'>In Progress</option>
                <option value='Completed'>Completed</option>
                <option value='Archived'>Archived</option>
            </select>
            <button type='submit'
            className='task_submit'>
                + Add Task</button>
            </div>
            </div>
        </form>
    </header>
)
}
export default TaskForm
