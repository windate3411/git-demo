const mongoose = require('mongoose')
const Todo = require('../todo')

mongoose.connect('mongodb://127.0.0.1/todo', { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('MangoDB failed');
})

db.once('open', () => {
  console.log("MongoDB connected");
  for (let i = 0; i < 10; i++) {
    Todo.create({ name: 'name-' + i })
  }
  console.log('done!');
})

