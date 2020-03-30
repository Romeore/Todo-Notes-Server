const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');   
const port = 5000;

require('dotenv/config');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import routes
const notesRoute = require('./routes/NotesRoute');

app.use('/notes', notesRoute);

// Connect To DB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true } ,
() =>console.log('connected to DB!')
);

// Start the server
app.listen(port);
