const express = require('express')
const app = express()

app.get("/", function(res, req){
    res.json("ciao");
});

