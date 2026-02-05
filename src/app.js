require("dotenv").config();  // MUST be before connectDB()

const express = require('express');
const connectDB = require('./config/db');
const User = require('./models/User');
const {register} = require('./controllers/auth.controller');
const applicationRoutes = require('./routes/application.routes');
const app = express();
connectDB();
 

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("home route is working");
})

app.use("/api/applications", applicationRoutes);
app.post("/register",register);

module.exports = app;