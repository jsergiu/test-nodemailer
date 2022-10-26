'use strict';

const express = require('express');
const nodemailer = require('nodemailer');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {


    var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "3dc7e2effdc62a",
            pass: "1d4f837324e37c"
        },
        debug: true,
        logger: true
    });

    var mailOptions = {
        from: 'sergiu.munteanu@live.com',
        to: 'sergiu.munteanu@live.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.send('Hello World');
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});