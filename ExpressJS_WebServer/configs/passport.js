const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

//récupérer le modele pour la collection users
const Users = require("../models/users");

//nécessaire pour le fonctionnement (les 3)

module.exports = function (passport) {
  //passport use
  passport.use(
    //on lui passe sur le id
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      //trouver notre utilisateur
      Users.findOne({ email: email }).then((user) => {
        if (!user) {
          return done(null, false, { message: "Invalid email or password, try again!" });
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Invalid email or password, try again!" });
          }
        });
      });
    })
  );
  //passport serialize
  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });
  //passport deserialize
  passport.deserializeUser(function (email, done) {
    Users.findById(email, function (err, user) {
      done(err, user);
    });
  });
};