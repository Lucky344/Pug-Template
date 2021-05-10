const express = require('express');
const path = require("path");
const fs = require('fs');
const app = express();
const port = 80;

app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));


// Our pug demo endpoint
app.get('/', (req,res)=>{
    const con = 'This is just a protocol follow it or die'
    const params = {'title':'GTA is the best game', "content": con}
    res.status(200).render('index.pug', params)
});

app.post('/', (req,res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outPutToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outPutToWrite)
    const params = {'message':'Form submitted successfully'}
    res.status(200).render('index.pug', params)
});

app.listen(port, ()=>{
    console.log(`Running on ${port}`)
});