const router = require('express').Router();
const { sendMail } = require('../mail');
const pug = require('pug');
const config = require('config');

router.post('/verify', async (req, res, next) => {
    const verifyLink = req.body.link;
    const email = req.body.email;
    const html = pug.renderFile('./templates/verify.pug', {
        url: verifyLink
    })

    // Send mail
    const mailOptions = {
        from: config.get('MailInfo.from'),
        to: email,
        subject: 'Подтверждение адреса электронной почты | Форум',
        html: html
    };
    try {
        await sendMail(mailOptions);
        res.status(200).json({
            success: true
        });
    } catch(err) {
        console.log(err);
        res.json({
            success: false
        });
    }
});

router.post('/recovery', async (req, res, next) => {
    const recoveryLink = req.body.link;
    const email = req.body.email;
    const html = pug.renderFile('./templates/passRecovery.pug', {
        url: recoveryLink
    })
    const mailOptions = {
        from: config.get('MailInfo.from'),
        to: email,
        subject: 'Восстановление пароля | Форум',
        html: html
    };
    try {
        await sendMail(mailOptions);
        res.status(200).json({
            success: true
        });
    } catch(err) {
        console.log(err);
        res.json({
            success: false
        });
    }
});

module.exports = router;