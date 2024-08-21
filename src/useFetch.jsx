import {useState, useEffect} from 'react'
const useFetch=(url)=>{
  const [tasks, setTasks] = useState(null)
useEffect(()=>{
  fetch(url)
.then(res => {return res.json(); })
.then(data => {setTasks(data)
})
},[url]);
  return {tasks}
  }
export default useFetch;