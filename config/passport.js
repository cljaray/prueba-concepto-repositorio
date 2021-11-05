const passport = require('passport');
const flash = require("connect-flash")
const LocalStrategy = require('passport-local').Strategy;
const connection = require('./database');
const User = connection.models.User;
const Profesor = connection.models.Profesor;
const validPassword = require("../lib/passwordUtils").validPassword
var bcrypt = require("bcryptjs")


const verifyCallback = (username, password, done) => {
    console.log(username)
    User.findOne({$or: [{username:username},{email:username}]})
        .then((user) => {           
            
            if(!user){ return done(null,false) }

            var isValid = validPassword(password,user.hash);

            if(isValid){
                return done(null,user)
            } else {
                return done(null,false)
            }
        })
        .catch((err)=>{
            done(err);
        })
}

const verifyCallbackProfesor = (username, password, done) => {
    Profesor.findOne({$or: [{username:username},{email:username}]})
        .then((user) => {           
            
            if(!user){ return done(null,false) }

            var isValid = validPassword(password,user.hash);

            if(isValid){
                return done(null,user)
            } else {
                return done(null,false)
            }
        })
        .catch((err)=>{
            done(err);
        })
}

const strategy =  new LocalStrategy(verifyCallback);
const strategyProfesor =  new LocalStrategy(verifyCallbackProfesor);



passport.use(strategy);
passport.use("profesorStrategy", strategyProfesor);



passport.serializeUser((user,done)=>{
    done(null, user)
})

passport.deserializeUser(function(user, done) {
    if(user!=null)
      done(null,user);
  });

