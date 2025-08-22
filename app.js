const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World !')
})

app.get('/creator', (req, res) => {
    res.send('Leroy was here !')
})

app.listen(port, () => {
    console.log(`Server started on port : ${port}`)
})
