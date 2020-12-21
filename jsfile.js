const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("view"));

const namedb = "anoop";
const passworddb =  "password";

app.post("/login",(req,res)=>{
    const {name,password} = req.body;
    if(name == namedb &&  password == passworddb){
      res.send("success");
    }else {
      res.sendFile(path.join(__dirname,"view","contact.html"));
    }
});

app.get("*",(req,res)=>{
  res.status(404).send("<h1>404</h1>");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT);
