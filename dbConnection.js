const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/search_app')
.then(()=>{
    console.log("connection established successfully");
}).catch((err)=>{
    console.log("connection error: " + err);
})