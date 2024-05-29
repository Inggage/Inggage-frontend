import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
// import cors from 'cors'
// import session from 'express-session'
// import cookieParser from "cookie-parser"
dotenv.config()
//import { UserRouter } from "./routes/user.js"

const app = express()
//app.use(express.json())
// app.use(cors(
//     {
//         origin:["https://infolify.netlify.app"],
//         methods:["GET", "POST"],
//         credentials:true
//     }
// ))
//app.use(session({secret:"secretkey", resave:false, saveUninitialized:true}))
//app.use(cookieParser())
//app.use('/auth',UserRouter)


mongoose.connect(process.env.URL)

app.listen(process.env.PORT,()=>{
    console.log("server is running")
})