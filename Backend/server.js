require('dotenv').config()
const express = require('express')
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express()

// get all routes
const authRoutes = require('./routes/authRoute')
const answerRoutes = require('./routes/answerRoute')
const questionRoutes = require('./routes/questionRoute')

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//cors & helmet
app.use(cors());

// connect database
require('./database/database')();


// for testing purpose
app.get('/', (_, res) => {
    res.send("Hello Naiya here")
})

// user all routes
app.use('/auth', authRoutes)
app.use('/answer', answerRoutes)
app.use('/question', questionRoutes)

// listen server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
