const express = require('express');
const app = express();
const connectDB = require("./config/db")
const todo = require('./model/todo')
connectDB();

app.use(express.json());
app.get('/',async (req,res)=>{
   try{
        const todos = await todo.find();
        res.json(todos);
   }catch(err){
    res.send(err);
   }
})
app.post('/',(req,res)=>{
    res.send("Post Route is Working!!")
})
app.put('/',(req,res)=>{
    res.send("Put Route is Working!!")
})
app.delete('/',(req,res)=>{
    res.send("Delete Route is Working!!")
})
app.listen(3000,()=>{
    console.log(`Server running on Port http://localhost:3000`);
})