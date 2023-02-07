const express = require('express')
var cors = require('cors')

const port = process.env.PORT || 5001

const {data, types, sizes, colors} = require('./data')



const app = express()
app.use(cors()) 
app.get('/', (req, res) => {
    res.send('backend live status')
})
 

app.get('/items', (req, res) => {
    res.send(data)
})

app.get('/type', (req, res) => {
    res.send(types)
})

app.get('/color', (req, res) => {
    res.send(colors)
})

app.get('/size', (req, res) => {
    res.send(sizes)
})

app.listen(port, (e) => {
    e && console.error('ext', e);
    console.log(`server started at ${port}`);
})