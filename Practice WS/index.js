const express = require('express');
var cors = require('cors')
const app=express();
const data=require('./data.json')
app.use(cors())
app.get('/', function (req, res) {
    res.send(data)
  })
app.listen(4000,()=>{console.log("Running on 4000");})
