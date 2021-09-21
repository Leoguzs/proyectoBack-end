//Sesion 8

//we configure passport

const passport = require('passport');

//this authentication stategy is Local Strategy
const LocalStrategy = require('passport').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

passport.use( new LocalStrategy({
    usernameField: 'email',  
    passwordField: 'password'
}, function(email, password, done) { //?
    User.findOne({ email: email})
    .then(function (user){
        if (!user || !user.validatePassword(password)){   //sesion 7 validar password
            return next(null, false, {error :{ 'incorrect email or password': 'wrong'}});

        }   
        return next (null, user)
    })
    .catch(done)
}));