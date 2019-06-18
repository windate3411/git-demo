const express = require('express')
const app = express()
const mongoose = require('mongoose')
const chalk = require('chalk')

mongoose.connect('mongodb://127.0.0.1/todo', { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('MangoDB failed');
})

db.once('open', () => {
  console.log("MongoDB connected");
})

//載入model
const Todo = require('./models/todo')

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(3000, () => {
  console.log(chalk.green.bold('you are now listening at port 3000'));
})