const config = require('config');
const { Nodemailer } = require('nodemailer-promisify');

const sendMail = mailOptions => {
  mailer = new Nodemailer({
    host: 'smtp.gmail.com', // 'smtp.gmail.com' for gmail
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL, // your acc
      pass: process.env.SMTP_PASSWORD, // password
    }
  });
  return mailer.Send(mailOptions);
}

module.exports = { sendMail };