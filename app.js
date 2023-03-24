const express = require("express");
const mongoose = require("mongoose");
const app = express()
const bodyParser = require("body-parser")
const cors = require('cors');

require('dotenv/config')
// Middleware
app.use(cors())

app.use(bodyParser.json())
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute)

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
