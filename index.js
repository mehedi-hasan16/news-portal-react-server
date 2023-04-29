const express = require('express');
const app = express();
const cors = require('cors')
const port = 5000;

const categories = require('./data/categories.json')

app.use(cors());

app.get('/', (req, res)=>{
    res.send('news portal is running')
})

app.get('/categories', (req, res)=>{
    res.send(categories)
})

app.listen(port, ()=>{
    console.log('news poral is running on port', port);
})