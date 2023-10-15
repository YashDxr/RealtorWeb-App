import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();



//Database
mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log(err);
});





//Express
const app = express();

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
})