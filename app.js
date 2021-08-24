const express = require('express')
var app = express()


app.get('/', async (req,res) => { 
  res
    .json({
        "aaa":"bbb", ...process.env})
    .end()
})

module.exports = app
