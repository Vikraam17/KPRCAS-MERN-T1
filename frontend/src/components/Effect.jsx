import React, { useEffect, useState } from 'react'

const Effect = () => {
   const [count,setCount]=useState(0);
   const [like,setLike] = useState(0);
   const [data,setData] = useState([]);
   //useEffect(callBack function,dependency array);
   //useEffect(()=>{ },[]);

  useEffect(()=>{
    console.log("Component Re-render")
  },[count])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((users)=>setData(users))
  },[])
 
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <h1>{like}</h1>
      <button onClick={()=>setLike(like+1)}>❤️</button>
      {data.map((user)=>(
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default Effect