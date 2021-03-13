// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const nodemailer = require("nodemailer");
module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error

  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      pokemon1: 1
    })
      .then(() => {
        mailSend(req);
        // partyCreate(res);
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });


  function mailSend(req) {
    const output = `
                <p>You have signed up for Pokemon Stay!!</p>
                <h3>Pokemon Stay Account </h3>

 });

  function mailSend(req) {
    const output = `
                <p>You have signed up for Pokemon STAY!!</p>
                <h3>Your Account:</h3>
                <ul>  
                  <li>Username: ${req.body.name}</li>
                  <li>Email: ${req.body.email}</li>
            
                </ul>
                <h3>Message</h3>
                <p>Welcome to Pokemon Stay! It's time to choose your pokemon! Your adventure awaits.</p>

                <p>Welcome to Pokemon STAY! It's time to choose your pokemon! Your adventure awaits.</p>

              `;
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.live.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "tester9191@hotmail.com", // generated ethereal user
        pass: "Testpassword1!" // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // setup email data with unicode symbols
    const mailOptions = {

      from: "'Pokemon Stay' <tester9191@hotmail.com>", // sender address
      to: req.body.email, // list of receivers
      subject: "New Pokemon Stay Account", // Subject line
      text: "Welcome to Pokemon Stay!", // plain text body

      from: "'Pokemon Stay' <wallace.ryan50@ethereal.email>", // sender address
      to: req.body.email, // list of receivers
      subject: "New Pokemon STAY Account", // Subject line
      text: "Welcome to Pokemon STAY!", // plain text body

      html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      res.render("contact", { msg: "Email has been sent" });
    });
  }

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        name: req.user.name,
        email: req.user.email,
        id: req.user.id,
        pokemon1: req.user.pokemon1
      });
    }
  });
};
