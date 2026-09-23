let express = require('express');
let router = express.Router();
let bcrypt=require('bcrypt');
let {users}=require('../models/users');

router.post("/register",async (req, res) => {
    let data=req.body;
    data.password=await bcrypt.hash(data.password,10);
    let newusers=new users(data);
    let result=await newusers.save();
    res.send(result);
    res.send("register page called");
});

router.post("/login",async(req, res) => {
    let user=await users.findOne({email:req.body.email});
    if(user){
        let passmatch=await bcrypt.compare(req.body.password,user.password);
        if(passmatch){
            res.send("login success");
    }else{
            res.send("Password Invalid");
        }
    }else{
        res.send("Email Invalid");
    }
    
});

router.get("/viewtasks", (req, res) => {
    res.send("view tasks page called");
});

router.get("/viewtodo", (req, res) => {
    res.send("view todo page called");
});

router.put("/updatprofile", (req, res) => {
    res.send("update profile page called");
});

module.exports = router;