const express = require('express');
const User = require("./userSchema")
require("./dbConnection")
const app = express();
const Port = 8989;
const cors = require("cors");
const path = require("path");

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}));

app.use(express.json());

app.post("/post",async(req,res)=>{
const data = await User.create(req.body);
res.send("successfully posted")

})

app.get('/search',async(req,res)=>{
    const data = await User.find({name:req.query.name});
    res.send(data)
}); 
app.get('/getData',async(req,res)=>{
    const data = await User.find();
    res.json(data)
})

app.get("/",(req,res)=>{
    app.use(express.static(path.resolve(__dirname,"frontend","build")))
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"))

})

app.listen(Port,()=>{
    console.log(`listening on port ${Port}`);
})