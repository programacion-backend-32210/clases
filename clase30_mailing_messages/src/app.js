import express from 'express'
import nodemailer from 'nodemailer'
import twilio from 'twilio'
import __dirname from './utils.js'

const TWILIO_ACCOUNT_SID = "AC2e2a8660adede115f63ddca901e5ade8"
const TWILIO_AUTHO_TOKEN = "83abdce6030035f407374c50c666b66c"
const TWILIO_SMS_NUMBER = "+12765331891"

const app = express()
const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'r2coderhouse@gmail.com',
        pass: 'pudtkkzveysbxlxs'
    }
})

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTHO_TOKEN)

app.get('/sms', async(req, res) => {
    const result = await client.messages.create({
        body: 'The Whale is my favorite movie',
        from: TWILIO_SMS_NUMBER,
        to: '+573163386191'
    })

    console.log(result);

    res.send('SMS sent')
})

app.get('/mail', async(req, res) => {
    const result = await transport.sendMail({
        from: 'r2coderhouse@gmail.com',
        to: 'r2coderhouse@gmail.com',
        subject: 'Oscar Winner',
        html: `
            <div>
                <h1>Everything everywhere all at once</h1>
                <img src="cid:image1" /.
            </div>
        `,
        attachments: [
            {
                filename: 'image1.jpg',
                path: __dirname + '/images/image1.jpg',
                cid: 'image1'
            },
            {
                filename: 'image2.jpg',
                path: __dirname + '/images/image2.jpg',
                cid: 'image2'
            },
        ]
    })

    console.log(result);
    res.send('Email sent')
})

app.listen(8080, () => console.log('Listening...'))