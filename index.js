"use strict";

// npm install --save  nodemailer
// npm start


const me = this;

const logger = require('./logger');
const config = require('config');
const nodemailer = require("nodemailer");

module.exports.execute001 = () => {
    const transporter = nodemailer.createTransport(config.smtp);
    const mailOptions = {
        from: config.mail.from,
        to: config.mail.to,
        subject: 'test mail',
        text: 'メール送信テスト'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            logger.console.error("send mail failed.");
            logger.console.error(error.message);
        }
        logger.console.debug("send mail success.");
        logger.console.debug('Message sent: %s', info.messageId);
    });
};


me.execute001();