const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

//@route GET api/email/test
router.get('/test', (req, res) => res.json({ msg: 'Email route works' }));

// @route POST api/email/send
router.post('/send', (req, res) => {
    // Nodemailer config
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.USER,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN
        }
    });

    var mailOptions = {
        from: 'Peachflame | QuotingHelper',
        to: 'alecdown@gmail.com',
        subject: 'New Quote - PeachFlame',
        generateTextFromHTML: true,
        html:
            '<h3>You have received a new quote request</h3>' +
            '<p> Name: ' +
            req.body.first_name +
            ' ' +
            req.body.last_name +
            '</p>' +
            '<p> Email: ' +
            req.body.email +
            '</p>' +
            '<p> Word count: ' +
            req.body.wordCount +
            '</p>' +
            '<p> Other Items: ' +
            '</p>' +
            '<p>' +
            req.body.developmental_edit +
            '<br/>' +
            req.body.copy_edit +
            '<br/>' +
            req.body.line_edit +
            '</p>' +
            '<p> Details: ' +
            req.body.details +
            '</p>'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(400).json({
                error: 'Sorry! Looks like we had an issue sending your quote.'
            });
        } else {
            console.log('Email sent!');
            res.status(200).json({
                success: 'Your quote request has been received.'
            });
        }
    });
});
module.exports = router;