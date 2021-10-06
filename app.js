const express = require('express')
var app = express()


app.get('/', async (req,res) => { 
  console.log('aaa')
    console.error('bbbbb')
  res
    .json({
        "aaa":"bbb"})
    .end()
})

module.exports = app
