import express from "express"
import http from 'http'
import cors from "cors"
import authRouter from "./routes/index"
import mongoosedb from "./lib/database/connection"
require('dotenv').config()


const app = express()
const server = http.createServer(app)

app.use(express.urlencoded())
app.use(express.json())
app.use(cors({
    origin: process.env.FRONTEND_BASEURL,
    credentials: true
}))

mongoosedb()


app.use("/auth", authRouter)

server.listen(5000,()=>{
      console.log('server started at 5000');        
})



