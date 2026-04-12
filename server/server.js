import 'dotenv/config';
import connectDb from './config/connectionDB.js';
import express from "express";

const app = express();

app.get("/", (req,res) => {
    res.send("Hi, Welcome To Home Page.")
})

await connectDb();

app.listen(3000, () => {
    console.log(`Server is Running....`)
})