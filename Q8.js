var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'teamtechnocracy@gmail.com',
    pass: 'SLkapilan#1#5'
  }
});

var mailOptions = {
  from: 'teamtechnocracy@gmail.com',
  to: 'info@uki.life',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
