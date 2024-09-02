const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:3
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('Users',userSchema)