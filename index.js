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
app.use(cors());
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
    db.get_users(username, function(err, user){
      if(err) {return done(err)};
      if(password === password) {}
    })
  }
));

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/meet-tiara/' + req.user.username);
  });

//Registering Users
app.post('/API/register',
  function(req, res) {
    console.log(req.body);
    db.create_user([req.body.username, req.body.password], function(err, response) {
      if(err) {
        res.send(err);
      }
      else {
        res.json(response);
      }
    });
  }
);

//Logging in Users
app.get('/API/login/:Username/:Password',
  function(req, res) {
    console.log(req.body)
    db.get_users([req.params.Username, req.params.Password], function(err, response) {
      console.log('hit db request');
      if(err) {
        console.log("error!");
        res.send(err);
      }
      else {
        console.log(response);
        res.status(200).json(response);
      }
    });
  }
);

//Other
app.use(express.static('./public'));

app.listen(8080, function() {
  console.log('listening on port 8080');
})
