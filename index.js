const express = require('express');
const app= express();

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hellow World")
})
const d =[{id:1,name:"lokesh"},{id:1,name:"lokesh"},{id:2,name:"lokesh"},{id:3,name:"lokesh"},{id:4,name:"lokesh"},{id:1,name:"lokesh"},{id:1,name:"lokesh"}];

app.get('/api/',(req,res)=>{
    res.send(d)
})

app.get('/api/:id',(req,res)=>{
    const x=d.find(c => c.id == req.params.id) 
    if(!x) res.status(404).send("Course not found") 
    res.send(x);
})

app.post('/api/data',(req,res)=>{
    if(!req.body.name || req.body.name.length < 4 ){
        //400 Error 
        res.status(400).send('Name is required and should be minimum');
    }

    const val={
        id:d.length+1,
        name:req.body.name
    }
    d.push(val);
    res.send(val);
});

// app.post('/api/user/data',(req,res)=>{
//     const a={
//         name:req.body.name
//     }
//     res.send(a);
// })
const port =process.env.PORT || 3600;

app.listen(port,()=>console.log(`Listen to On port ${port}`))