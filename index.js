const express = require("express");
const app = express();

const list_a=[
    {
     "nick_name":"Anu",
     "score":87
    },
    {
    "nick_name":"bhanu",
    "score":97
    },
    {
    "nick_name":"chintu",
    "score":65
    }
];

app.get("/random_name/",(req,res)=>{
    i=Math.floor(Math.random()*3);
    res.send(list_a[i]);
});


app.get("/",(req,res)=>{
    res.send("Welcome!")
});

app.listen("3005",()=>{
    console.log("listening")
});