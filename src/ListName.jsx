import {useState,useEffect} from 'react'
import useSubmitData from './useSubmitData.jsx'
const ListName = () => {
  const [title, setTitle] = useState('');
  const [task, setTask] = useState('');
  const [taskList,setTaskList] = useState([]);
  const handleInputTasks=(e)=>{
    setTask(e.target.value)
  };
  const handleTitleInput=(e)=>{
   setTitle(e.target.value)
  };
  
  const handleAddTask=()=>{
    setTaskList([...taskList,task]);
    setTask('');
    };
  const handleSubmit=()=>{
    useSubmitData(title,taskList)
  };
  return(
    <main>
       <input type="text" name="name" placeholder="Title: " onChange={handleTitleInput} value={title}/>
      {taskList && taskList.map((task,index)=>{
        return(
          <div key={index}>
            <input id={task} type= "checkbox" value={task} name= "task"/>
            <label>{task}</label>
          </div>
        )
      })}
      <input value={task} type="text" name="task" placeholder="Task: " onChange={handleInputTasks}/>
      <button onClick={handleAddTask}>Add Task</button><br/>
      <button onClick={handleSubmit}>Save</button>
    </main>
  )};
export default ListName;