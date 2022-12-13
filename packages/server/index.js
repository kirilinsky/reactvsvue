const express = require('express')

const port = process.env.PORT || 5001

const data = require('./data')
const app = express()

app.get('/', (req, res) => {
    res.send('backend live status')
})

app.get('/items', (req, res) => {
    res.send(data)
})

app.listen(port, (e) => {
    e && console.error('ext', e);
    console.log(`server started at ${port}`);
})