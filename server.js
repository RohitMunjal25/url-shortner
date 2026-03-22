const express=require("express");
const cors=require("cors");
const connectdb=require("./db");
require("dotenv").config();
const app=express();
app.use(cors());
app.use(express.json());
connectdb();
const urlRoutes=require("./url");
app.use("/",urlRoutes);
app.listen(5000,()=>{
    console.log("server running on port 5000");
});
