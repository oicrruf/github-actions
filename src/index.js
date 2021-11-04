const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.get('/health', (req, res) => {
  res.send({
    serverStatus: 'ok',
    version: 'v1.0.0'
  })
})

app.listen(PORT, () => {
  console.log(`Welcome to http://localhost:${PORT}`)
})

module.exports = app;