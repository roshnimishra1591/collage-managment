import express from "express";
import router from "./router.config.js";
import './db.config.js'
import cookieParser from "cookie-parser";
const app = express()



app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded())

// app.get('/home',(req,res) =>{
//     res.send("response from the home page")
// })

app.use("/api",router)

export default app;