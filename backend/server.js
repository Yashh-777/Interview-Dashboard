const express = require("express");
 require('./db/config');
 const cors =require("cors");
 const User =require("./db/users");
 const app= express();

app.use(express.json());
app.use(cors());

app.post("/register",async (req,res)=>{
    let users = new User(req.body);
    let result = await users.save();
    res.send(result);

})
 app.listen(5000,()=> {console.log("server started on port 5000")})