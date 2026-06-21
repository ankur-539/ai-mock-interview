import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

const db = process.env.DATABASE;

const mydatabase = mongoose.connect(db).then(()=>{
    console.log("database connected")
})

export default mydatabase;