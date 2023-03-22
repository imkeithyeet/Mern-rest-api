const express = require("express");
const mongoose = require("mongoose");
const app = express()
require('dotenv/config')

// ROUTES
app.get('/',(req,res)=> {
    res.send('We are on home')
})

app.get('/posts',(req,res)=> {
    res.send('We are on home')
})

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log('Connected to DB!');
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });




  app.listen(3000)
