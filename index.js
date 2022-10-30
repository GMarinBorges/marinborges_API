const express = require("express");
const app = express();
const nodemon = require("nodemon");
app.use(express.json());

const PORT = 1150;

let course1 = {
    courseId: "0001",
    courseName: "Spanish",
    startDate: "10/30/2022",
    endDate: "10/31/2022"
}

let course2 = {
    courseId: "0002",
    courseName: "Math",
    startDate: "10/30/2022",
    endDate: "10/31/2022"
}

let course3 = {
    courseId: "0003",
    courseName: "Programming",
    startDate: "10/30/2022",
    endDate: "10/31/2022"
}

app.get("/getUser", (req, res) => {
    try {
    let courses = {
        course1,
        course2,
        course3
    }
    let show = {
        username: req.body.object.user.username,
        password: req.body.object.user.password,
        email: req.body.object.user.email,
        courses
    }
        return res.status(200).json(show);
    }
    catch {
        return res.status(500);
    }
});

app.post('/addUser', (req, res) => {
    try {
        return res.status(200).json(`Added user ${req.body.object.user.username} successfully`);
    }
    catch {
        return res.status(500);
    }
});

app.listen(PORT, () =>{
    console.log(`Server Started on port ${PORT}`);
});