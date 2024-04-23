const express =require("express");
const app = express();
const port =8000;


const mongoose =require("mongoose");

mongoose.connect("mongodb+srv://ankithesturi2103:@Nkith1909@spotify.ondqgo2.mongodb.net/",{});
app.get("/",(req,res)=>{
    res.send("hello world");
});

app.listen(port,()=>{
    console.log("app is listening"+port);
});



//linking th emongodb

