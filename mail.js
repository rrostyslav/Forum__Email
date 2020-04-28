const config = require('config');
const { Nodemailer } = require('nodemailer-promisify');

const sendMail = mailOptions => {
    mailer = new Nodemailer({
        host: 'smtp.gmail.com', // 'smtp.gmail.com' for gmail
        port: 465,
        secure: true,
        auth: {
            user: config.get('Credentials.login'), // your acc
            pass: config.get('Credentials.pass'), // password
        }
    });
    return mailer.Send(mailOptions);
}

module.exports = { sendMail };