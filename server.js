const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 5000
const db = require('./config/keys').mongoURI

mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello'))

app.listen(port, () => console.log(`listening on port ${port}`))