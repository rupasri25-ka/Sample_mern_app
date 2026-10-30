
let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');
let { users } = require('../models/users');

router.post("/register", async (req, res) => {
    try {
        let data = req.body;

        data.password = await bcrypt.hash(data.password, 10);

        let newusers = new users(data);
        let result = await newusers.save();

        res.send(result);
    } catch (err) {
        res.status(500).send("Registration failed");
    }
});
//localhost:3000/employees/login
router.post("/login", async (req, res) => {
    try {
        let user = await users.findOne({ email: req.body.email });

        if (user) {
            let passmatch = await bcrypt.compare(
                req.body.password,
                user.password
            );

            if (passmatch) {
                res.send({
                    msg: "login success",
                    user: {
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        role: user.role
                    }
                });
            } else {
                res.status(401).send("Password Invalid");
            }
        } else {
            res.status(404).send("Email Invalid");
        }
    } catch (err) {
        res.status(500).send("Login failed");
    }
});

router.get("/viewtasks", (req, res) => {
    res.send("view tasks page called");
});

router.get("/viewtodo", (req, res) => {
    res.send("view todo page called");
});

router.patch("/updateprofile/:id", async (req, res) => {
    try {
        let data = req.body;

        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }

        let updatedata = await users.findByIdAndUpdate(
            req.params.id,
            { $set: data },
            { new: true }
        );

        res.send(updatedata);
    } catch (err) {
        res.status(500).send("Profile update failed");
    }
});

module.exports = router;
