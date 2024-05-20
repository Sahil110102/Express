const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})