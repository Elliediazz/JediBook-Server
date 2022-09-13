const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

//Bringing in the routes
const avatarRoutes = require('./routes/Avatar')
const userRoutes = require('./routes/User')

const app =express()

//Test the connection 
app.get('/', (req, res) => {
    res.send('In a Galaxy Far Far away...')
 })

// Middleware
app.use(express.json()); //parses incoming JSON request and puts the parsed data in req.body
app.use(cors())

// Routes
app.use("/user", userRoutes); // we want express to use userRoutes for all requests coming at /auth/xxx, like /auth/login
app.use("/myavatars", avatarRoutes)

// Listen for connection 
const PORT = process.env.PORT
app.listen(PORT, () => {
    //DB connection
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('In a DB far far away...'))
    .catch(err => console.error(err));

    console.log(`listening on port ${PORT}`)
});