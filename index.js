var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var nodemailer = require('nodemailer');
var validator = require('email-validator');
var passport = require('passport');
var massive = require('massive');
var moment = require('moment');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('./config.js');

var app = module.exports = express();
var LocalStrategy = require('passport-local').Strategy;
var massiveInstance = massive.connectSync({connectionString : config.db});
app.set('db', massiveInstance);
var db = app.get('db');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: 'make up your own session secret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy({
    clientID: config.facebookID,
    clientSecret: config.facebookSecret,
    callbackURL: "/auth/facebook/callback"
  }, function(accessToken, refreshToken, profile, next) {
    console.log('FB Profile: ', profile);
    //db. query to check if user exists in database
    db.users.findOne({facebook_id: profile.id}, function(err, dbRes) {
      if (!dbRes) {
        console.log("User not found. Creating...");
        db.users.insert({user_name: profile.displayName, facebook_id: profile.id} , function(err, dbRes) {
          return next(null, dbRes);
        });
      } else {
        console.log("Existing user found.");
        return next(null, dbRes);
      }
    });
  }
));

passport.serializeUser(function(profile, done) {
  console.log('ser');
  done(null, profile);
});

passport.deserializeUser(function(deserializedUser, done) {
  console.log('des');
  done(null, deserializedUser);
});

app.get('/auth/facebook',passport.authenticate('facebook'));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/#/blog/1234',
  failureRedirect: '/#/'
}));

var checkAuth = function (req, res, next) {
  // console.log("checkAuth");
  if (req.isAuthenticated()) {
    next();
  }
  else {
    res.json({err: 403});
  }
};

app.get('/me', checkAuth, function(req, res, next) {
  console.log("req.user in server /me", req.user);
   res.json(req.user);
});

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

//Sending Email
app.post('/contact', function(req, res, next) {
  var mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: config.email,
      pass: config.password
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
  };
  smtpTrans.sendMail(mailOpts, function(err, info) {
    if(err) {
      console.log(err);
      return res.send('err');
    }
    else {
      return res.send('success');
    }
  });
});

//Authentication Process
passport.use(new LocalStrategy(
  function(username, password, done) {
    db.get_users(username, function(err, user){
      if(err) {return done(err);}
      if(password === password) {}
    });
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
    console.log(req.body);

    db.get_users([req.params.Username, req.params.Password], function(err, response) {
      console.log('hit db request');
      if(err) {
        console.log("error!");
        res.send(err);
      }
      else {
        req.user = response;
        console.log(req.user);
        res.status(200).json(req.user);
      }
    });
  }
);

//Posting Blog post
app.post('/API/blog',
  function(req, res) {
    var author = req.body.author_id;
    var postText = req.body.blog_post;
    var date = req.body.publish_date;
    var postTitle = req.body.post_title;

    console.log('postText on req.body', postText);

    db.create_post([author, date, postTitle, postText], function(err, response) {
      console.log("database post?");
      if(err) {
        console.log(err);
        res.send(err);
      }
      console.log(response);
      res.json(response);

    });
  }
);

app.get('/API/blogPosts',
  function(req, res) {
    db.get_posts(function(err, response) {
      if(err) {
        res.send(err);
      }
      else {
        console.log("get request", response);
        res.json(response);
      }
    });
  }
);

//Other
app.use(express.static('./public'));

app.listen(8080, function() {
  console.log('listening on port 8080');
});
