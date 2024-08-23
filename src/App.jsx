import './App.css'
import useFetch from './useFetch.jsx'
import TaskList from './TaskList.jsx'

export default function App() {
const {tasks} = useFetch('https://2a356f81-14b6-4528-9cf5-585880122305-00-2xrlpjkpluv5u.riker.replit.dev:8000/tasks');
  
  return (
    <div className="tasks">
    {tasks && <TaskList tasks={tasks}/>}
    </div>
);
}
