const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app =express()

//Test the connection 
app.get('/', (req, res) => {
    res.send('In a Galaxy Far Far away...')
 })

// Middleware
app.use(express.json()); //parses incoming JSON request and puts the parsed data in req.body

// Routes
const userRoutes = require('./routes/User')
app.use("/", userRoutes); // we want express to use userRoutes for all requests coming at /auth/xxx, like /auth/login

// Listen for connection 
const PORT = process.env.PORT
app.listen(PORT, () => {
    //DB connection
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

    console.log(`listening on port ${PORT}`)
});