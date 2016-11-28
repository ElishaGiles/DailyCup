var express = require('express');
var session = require('session');
var bodyParser = require('body-parser');
var cors = require('cors');
var nodemailer = require('nodemailer');
var validator = require('email-validator');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post('/contact', function(req, res, next) {
  // if(!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.subject || !req.body.message) {
  //   return res.send('missing information');
  // }
  // var email_check = validator.validate(req.body.mail);
  // if(email_check == false) {
  //   return res.send('invalid email');
  // }
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

app.use(express.static('./public'));

app.listen(8080, function() {
  console.log('listening on port 8080');
})
