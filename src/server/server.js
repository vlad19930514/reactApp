import express from 'express'
import ReactDOM from 'react-dom/server'
import { App } from '../App'

import {indexTemplate} from './indexTemplate'



const app = express()

app.use('/static', express.static('./dist/client'))
app.get('/',(req,res)=>{
    res.send(
        indexTemplate(ReactDOM.renderToString(App())
    ))
  
})
app.get('/auth',(req,res)=>{
   // req.query.code
    res.send(
        indexTemplate(ReactDOM.renderToString(App())
    ))
  
})


app.listen(3002,()=>{
    console.log('Server started on http:/localhost:3000')
})