const express = require('express')
require('noodle-it')

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.sendFile('./index.html')
})

app.listen(port, () => console.log(`Listening on port ${port}`))
