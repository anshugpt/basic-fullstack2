import express from "express"
import 'dotenv/config'
const app = express();



app.listen(process.env.PORT, ()=>{
    console.log("Sever is ready on port - " + process.env.PORT);
})

app.get("/", (req, res)=>{
    res.send("home");
})

app.get("/api/user", (req, res)=>{
    let user = [
        {
            id:1,
            name: "Anshu",
            age: 21
        },
        {
            id:2,
            name: "Anjali",
            age: 18
        }
    ]
    res.send(user);
})