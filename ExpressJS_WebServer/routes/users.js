// Dependencies
const express = require("express");
const { Mongoose } = require("mongoose");
const router = express.Router();
const fs = require("fs");
const nodeJSPath = require("path");
const Users = require("../models/users");
const { isAuthorized, isAdmin } = require("../configs/auth");

//Routes

/**
 * Route login page
 */
router.get("/login", (req, res) => {
    res.render("login");
})

// Router for login out
router.get("/logout", (request, response) => {
    request.logout((err) => {
      if (err) throw err;
      request.flash("success_msg", "Logout successfully");
      response.redirect("/users/login");
    });
  });

// router that autenticate users upon request to login
router.post("/login", (request, response, next) => {
    passport.authenticate("local", {
      successRedirect: "/",
      badRequestMessage: "Enter every field to login",
      failureRedirect: "/users/login",
      failureFlash: true,
    })(request, response, next);
});

// Route for registration page
router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/register", (request, response) => {
    const { _id, name, email, password, password2 } = request.body; //pour aller les cherchers
    let errors = [];
    if (!name || !email || !password || !password2) {
      errors.push({ msg: "Enter every field" });
    }
    if (password.length < 4) {
      errors.push({ msg: "The password must be longer than 4 character" });
    }
    if (password !== password2) {
      errors.push({ msg: "Password must be indentical" });
    }
    Users.getUserByEmail(email, (err, user) => {
      if (err) throw err;
      if (user) {
        if (email === user.email) {
          errors.push({ msg: "Invalid email" });
        }
      }
      if (errors.length > 0) {
        response.render("register", {
          errors,
          _id,
          name,
          email,
          password,
          password2,
          roleAdmin,
          roleSeller,
        });
      } else {
        const newUser = new Users({ name, email, _id, password });
        //Using bcrypt to hash passwords
        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err;
          bcrypt.hash(password, salt, (err, hache) => {
            newUser.password = hache;
            let tabRoles = ["user"];
            //saves the users roles
            newUser.roles = tabRoles;
            newUser
              .save() //save in the bd
              .then((user) => {
                request.flash(
                  "success_msg",
                  "Account created"
                );
                response.redirect("/users/login");
              })
              .catch((err) => console.log(err));
          });
        });
      }
    });
});


//Router that gets a user profile by its ID and renders its info on the page for modification
router.get("/modify/:_id", isAuthorized, (request, response) => {
    Users.getUserById(request.params._id, (err, userInfo) => {
      if (err) throw err;
      response.render("modifyUser", {
        user: userInfo,
      });
    });
});

module.exports = router;