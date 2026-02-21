require("dotenv").config();

const express = require('express');
const connectDB = require('./config/db');
const cors = require("cors");
const app = express();

connectDB();

app.use(cors({
    origin: "*",
    methods: ["GET","POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type","Authorization"]
}));

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("home route is working");
})

app.use("/api/applications", require('./routes/application.routes'));
app.use("/api/auth", require('./routes/auth.routes'));

module.exports = app;