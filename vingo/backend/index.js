import express from "express"
import dotenv from "dotenv"
dotenv.config()
const app = express().PORT || 5000


app.listen(port,()=>{
    console.log("Server started at ${port}")
})