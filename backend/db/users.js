const mongoose = require('mongoose');

    const userSchema= new mongoose.Schema({
        firstName:String,
        lastName:String,
        email:String,
        contact:String,
        address1:String,
        address2:String
      }); 

module.exports=mongoose.model("users",userSchema);
