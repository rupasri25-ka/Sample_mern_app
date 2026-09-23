let moogoose=require('mongoose');
let userSchema=moogoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
    role:{
        type:String,
        enum:["HR","EMPLOYEE"],
    }
})
let users=moogoose.model('User', userSchema);
module.exports={users};