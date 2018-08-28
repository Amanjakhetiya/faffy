const express = require('express')
const path = require('path')
require('noodle-it')

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/styles.', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => console.log(`Listening on port ${port}`))
