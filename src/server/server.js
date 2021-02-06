import express from 'express'

const app = express()

app.get('/',()=>{
    res.send('Hello World')
})

app.listen(3000,()=>{
    console.log('Server started on http:/localhost:3000')
})