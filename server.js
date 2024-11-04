import dotenv from 'dotenv';
dotenv.config();


console.log(process.env.PASSWORD)
import express from 'express'
import employeRouter from './routes.js'

const app = express();
const PORT = 3000;

app.use(express.json())

app.post("/",employeRouter)

app.delete("/:id",employeRouter)

app.put("/:id",employeRouter)

app.get("/", (req, res) => {
    res.send("hello world")
})

app.use("/api/v1/student", employeRouter);

app.listen(PORT, () => console.log(`the listen port ${PORT}`)) 