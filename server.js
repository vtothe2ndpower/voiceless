require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Connected to Database..'))

// Middleware
app.use(express.json())

// Routes
const usersRouter = require('./routes/users');
app.use('/users',usersRouter);

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${ PORT }`));