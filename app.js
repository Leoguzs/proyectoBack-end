//THIS ARE THE PACKAGES WE ARE GOING TO USE
const express = require('express');
const app = express();

// BODYPARSER
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CONFIG TO LINK DATABASE THROUGH MONGOOSE
const mongoose = require('mongoose')

mongoose.connect(
    "mongodb+srv://apiUser:leostonem@cluster0.aimfg.mongodb.net/beduMusic?retryWrites=true&w=majority"
)

mongoose.set("debug", true)

require('.models/Artist')
require('.models/Concert')
require('.models/Album')
require('.models/User')

//CONFIGURING ROUTES
app.use('/v1', require('./routes'));

// INITIALIZING SERVER
const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})
