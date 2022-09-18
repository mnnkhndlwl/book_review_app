import express from "express";
import mysql from "mysql";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.key,
    database: "test",
})


app.listen(8800, () => {
    console.log("Connected to backend.");
});