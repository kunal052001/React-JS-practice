const express=require("express")
const app=express()

app.get("/",(req,res)=>{
    res.send("hay this is kunal talking to severr")
})

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server is running on port localhost:${PORT}`)
})