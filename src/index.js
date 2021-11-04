const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.get('/health', (req, res) => {
  res.send({
    serverStatus: 'ok',
    version: '1.0.0'
  })
})

app.get('/user/:id', (req, res) => {
  res.send({
    user_id: parseInt(req.params.id)
  })
})

app.listen(PORT, () => {
  console.log(`Welcome to http://localhost:${PORT}`)
})

module.exports = app;