var express = require('express');
var session = require('session');
var bodyParser = require('body-parser');
var cors = require('cors');
var nodemailer = require('nodemailer');
var validator = require('email-validator');
var passport = require('passport');
var massive = require('massive');


var app = express();
var LocalStrategy = require('passport-local').Strategy;
var db = massive.connectSync({db : "TeaDB"});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(passport.initialize());

//Sending Email
app.post('/contact', function(req, res, next) {
  var mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'elisha.g.giles@gmail.com',
      pass: '156-giles7'
    }
  });
  mailOpts = {
    from: {
      name: req.body.firstname,
      address: req.body.email
    },
    to: 'elisha.g.giles@gmail.com',
    subject: req.body.subject,
    text: req.body.message
  }
  smtpTrans.sendMail(mailOpts, function(err, info) {
    if(err) {
      console.log(err);
      return res.send('err');
    }
    else {
      return res.send('success');
    }
  });
})

//Authentication Process
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

//Other
app.use(express.static('./public'));

app.listen(8080, function() {
  console.log('listening on port 8080');
})
