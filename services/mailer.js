
const nodemailer = require("nodemailer");
const handlebars = require('nodemailer-express-handlebars')
    // send key embedded in email to user

    const transpoter = () =>
    {
        const transporter = nodemailer.createTransport(
            {
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                requireTLS: true,
                auth: 
                    {
                        user: process.env.Email, 
                        pass: process.env.Password, 
                    },
            }
        );
    
        transporter.use('compile', handlebars(
            {
                viewEngine: 
                {
                    extName: ".hbs",
                    partialsDir: 'views/',
                    defaultLayout: false,
                },
                viewPath: 'views/',
                extName: ".hbs",
            }
    
        ));
        return transporter;
    }

    const sendMessage = async (sender, recipient, message, senderName, senderEmail) => {
              // send mail with defined transport object
        let transporter = transpoter();
        let info = await transporter.sendMail({
            from: sender, // sender address
            to: recipient, // list of receivers
            subject: "Contact Us", // Subject line
            text: ``, // plain text body
            context: {
                message: message,
                name: senderName,
                email: senderEmail
            },
            template: 'contact_us'
        })

        // return delivery status
        return info;
    }


module.exports = {
    sendMessage
}