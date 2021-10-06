const express = require('express')
var app = express()


app.get('/', async (req,res) => { 
  console.log('aaa')
    console.error('bbbbb')
  res
    .json({
        "aaa":"ddddd"})
    .end()
})

module.exports = app
