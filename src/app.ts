// const {express} = require('express');
import express from 'express'
const app = express()
const port = 3001
const version = 'v1'


app.get(`/api/${version}/:project`, (req, res) => {
  res.send(JSON.stringify(req.params.project))

  // res.send(JSON.stringify({aa: req.params.project}))
})


app.listen(port, () => {
    console.log('start 3001')
})


