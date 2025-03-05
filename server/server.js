const express=require("express")
const app=express()
const dotenv=require("dotenv")
const connectDB=require("./config/db")
dotenv.config();
connectDB();

app.get("/",(req,res)=>res.send("hay this is server here"))

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>console.log(`server running at http://localhost:${PORT}`))
