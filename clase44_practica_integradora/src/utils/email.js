import nodemailer from 'nodemailer'

const emailAdmin = 'r2coderhouse@gmail.com'
const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: emailAdmin,
        pass: 'ufpspnjibtvaaexd'
    }
})

const sendEmail = ({ to, subject, html }) => {
    return transport.sendMail({
        from: emailAdmin,
        to,
        subject,
        html
    })
}

export default sendEmail