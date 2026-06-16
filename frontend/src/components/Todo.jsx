import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Todo = () => {
    const [todos,setTodos] = useState([])
    const [task,setTask] = useState("");
    const [editing,setEditing] = useState(null)
    const fetchData = async() =>{
        const res = await axios.get('http://localhost:3000/');
        setTodos(res.data);
    }
    useEffect(()=>{
        fetchData();
    },[])

    const handleAddOrUpdate = async() =>{
        if(editing!=null){
            await axios.put(`http://localhost:3000/${editing}`,{task})
        }
        else{
            await axios.post('http://localhost:3000/',{task})
        }
        setTask("");
        setEditing(null);
        fetchData();
    }
    const handleDelete =async (id) =>{
        await axios.delete(`http://localhost:3000/${id}`)
        fetchData();
    }
    const handleEdit =(todo)=>{
        setTask(todo.task);
        setEditing(todo._id);
    }
    const handleToggle = async(todo)=>{
        await axios.put(`http://localhost:3000/${todo._id}`,{
            completed:!todo.completed
        })
        fetchData();
    }
  return (
    <div>
        <form>
            <label>Task : </label>
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
            <button onClick={handleAddOrUpdate}>{editing?"Update":"Add"}</button>
        </form>
        <ul>
            {todos.map((todo,index)=>(
                <li key={todo._id}>
                    <span 
                    onClick={()=>handleToggle(todo)}
                    style={{cursor:"pointer",textDecoration:todo.completed?"line-through":"none"}}
                    >{todo.task} </span>
                    <button onClick={()=>handleEdit(todo)}>✏️</button>
                    <button onClick={()=>handleDelete(todo._id)}>🗑️</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo