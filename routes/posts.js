const express = require('express')


const router=express.router()
app.get('/posts',(req,res)=> {
    res.send('We are on posts')
})

module.exports = router