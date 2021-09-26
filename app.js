//THIS ARE THE PACKAGES WE ARE GOING TO USE
const express = require('express');
const app = express();

// BODYPARSER
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CONFIG TO LINK DATABASE THROUGH MONGOOSE
const mongoose = require('mongoose');



// mongoose.connect(  //MONGO_URI la va a tomar como variable de entorno
//  /*   process.env.MONGO_URI */ "mongodb+srv://apiUser:leostonem@cluster0.aimfg.mongodb.net/beduMusic?retryWrites=true&w=majority"
// )

// mongoose.connect( "mongodb+srv://apiUser:leostonem@cluster0.aimfg.mongodb.net/beduMusic?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
//     if (err)
//        console.error(err);
//     else
//        console.log("Connected to the mongodb"); 
//   });
// mongoose.set("debug", true)

mongoose.connect("mongodb+srv://apiUser:leostonem@cluster0.aimfg.mongodb.net/beduMusic?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
})


require('./models/Artist')
require('./models/Concert')
require('./models/Album')
require('./models/User')
require('./models/Track')

require('./config/passport')

//CONFIGURING ROUTES
app.use('/v1', require('./routes'));

// INITIALIZING SERVER
const PORT = 4001;
app.listen(PORT, () => {   /* (process.env.PORT), */
    console.log(`Server listening on http://localhost:${PORT}`)
})
