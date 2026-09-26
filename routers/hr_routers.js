let express = require('express');

let router = express.Router();
let {users}=require('../models/users');

router.get("/employees",async (req, res) => {
    let result=await users.find();
    res.send(result);
});

router.delete("/deleteemp/:id",async(req,res)=>{
    let result=await users.findByIdAndDelete(req.params.id);
    if(result){
        res.send("employee deleted successfully");
    }

    
})

router.post("/assign-task", (req, res) => {
    res.send("assign task page called");
});

router.get("/tasks", (req, res) => {
    res.send("tasks called");
});

router.get("/notification", (req, res) => {
    res.send("notification called");
});

module.exports = router;