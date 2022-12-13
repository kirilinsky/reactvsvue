const express = require('express')

const port = process.env.PORT || 5001

const app = express()

app.get('/', (req, res) => {
    res.send('backend live status')
})

app.listen(port, (e) => {
    e && console.error('ext', e);
    console.log(`server started at ${port}`);
})