const express=require("express")
const cors=require("cors")
const user=require('./models/models')
const DBconnect=require('./config/Db')
const bcrypt=require('bcrypt')
// const bodyParser = require("express.json");
const app=express()
DBconnect()


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
// bodyParser()
app.post("/register",(req,res)=>{
   user.create(req.body)
   .then((result)=>res.send(result))
   .catch((err)=>res.send(err))
})
app.post("/login", async (req, res) => {
    try {
        console.log("Received request body:", req.body); // ✅ Log the request body

        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const value = await user.findOne({ email: email });

        if (!value) {
            return res.status(400).json({ message: "User not found" });
        }

        const output = await bcrypt.compare(password, value.password);
        if (output) {
            return res.status(200).json({ message: "You are logged in successfully" });
        } else {
            return res.status(400).json({ message: "Email or password not matched" });
        }
    } catch (err) {
        console.error("Something went wrong", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});



const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server is running on port localhost:${PORT}`)
})