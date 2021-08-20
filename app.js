const express = require('express')
var app = express()


app.get('/', async (req,res) => { 
  res
    .json({
        "aaa":"bbb"})
    .end()
})

module.exports = app
