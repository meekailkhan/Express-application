require("dotenv").config();
const express = require("express");
const employeRouter = require('./src/student/routes')

const app = express();
const port = 3000;

app.use(express.json())

app.post("/",employeRouter)

app.delete("/:id",employeRouter)

app.put("/:id",employeRouter)

app.get("/", (req, res) => {
    res.send("hello world")
})

app.use("/api/v1/student", employeRouter);

app.listen(port, () => console.log(`the listen port ${port}`)) 