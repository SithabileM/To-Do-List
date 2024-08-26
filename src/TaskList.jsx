import {Link} from 'react-router-dom';

const TaskList=({tasks})=>{
  return (
 <div className="myTasks">
   <Link to="/title"><button>Add new list</button></Link>
   {tasks.map((task) =>(
   <div className="preview" key={(task.id)}>
     <h2>{task.title}</h2>
     <p>{task.date}</p>
     <button>View tasks</button>
     <button>Delete</button>
   </div>
   )
 )
}
 </div>
 );
};

export default TaskList;