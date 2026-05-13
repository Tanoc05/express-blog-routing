const express = require('express')
const app = express()
const port = 8090
const postsRouter = require('./router/posts')

app.use(express.static('public'));

app.get('/hello',(req,res) =>{
    res.send("hello world")
})

app.use('/posts',postsRouter)

app.listen(port,() => {
    console.log('app in ascolto');
})