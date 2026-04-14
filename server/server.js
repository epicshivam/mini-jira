import 'dotenv/config';
import connectDb from './config/connectionDB.js';
import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());
app.use("/user", userRoutes);

app.get("/", (req, res) => {
    res.send("Hi, Welcome To Home Page.")
})

await connectDb();

app.listen(3000, () => {
    console.log(`Server is Running....`)
});