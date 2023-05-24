// Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;
const expressLayouts = require("express-ejs-layouts");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });
const http = require("http");
const server = http.createServer(app);
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads/");
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname);
  },
});

// Initialize uploads.
app.use(upload.any());

//Passport configuration
/* require("./configs/passport")(passport); */

// Initialize express layouts
app.use(expressLayouts);

// Used to get post request from the web page.
app.use(express.urlencoded({ extended: false })); //middlewear
app.use(express.json());

//Creation of express session
app.use(
  session({
    secret: "AddAnyThingYouWantHere", //Used to block piracy attempts.
    resave: true,
    saveUninitialized: true,
  })
);

//Initialization of express session with passport.
app.use(passport.initialize());
app.use(passport.session());

//Connection to flash
app.use(flash());

//Global variables used for authentification.
app.use((requete, reponse, next) => {
  reponse.locals.success_msg = requete.flash("success_msg");
  reponse.locals.error_msg = requete.flash("error_msg");
  reponse.locals.error_passport = requete.flash("error");
  next();
});

// Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

//Statique route
app.use("/css", express.static("./styles"));

//Views
app.set("views", "./views");
app.set("layout", "layout");
app.set("view engine", "ejs");

/* //Mongoose connection
mongoose.connect(
    "link to mongodb"
);
    let db = mongoose.connection;
    db.on("error", (err) => {
    console.error(`Database Error: ${err}`);
});
    db.on("open", () => {
    console.log(`Connected to the Database`);
}); */

//Server listen on PORT
server.listen(PORT, console.log(`Web server running on port : ${PORT}`));

