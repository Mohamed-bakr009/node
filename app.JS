const express=require('express')
const app=express()
const fs =require('fs')
app.use(express.json())
const port=5000
app.listen(port,_=>console.log(`the sirver started at port : ${port}`))

const productRoutes = require('./route');
app.use('/product',productRoutes)

app.use((req,res)=>{
    res.send('hello server not found')
})
