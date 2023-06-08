const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
require("colors")
const connectDB = require("./dbinit")
const app = express();
const bierkreislauf = require("./routes/bier")

connectDB();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/bierkreislauf", bierkreislauf)



app.get("/",(req,res)=>{
    res.send("Welcome to the Bierkreislauf API, visit /bierkreislauf to fetch the beer data")
})
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`The server is running on http://localhost:${PORT}`.bgCyan)
})

//
// name
// "Sternburg"
// origin
// "Leipzig, Germany"