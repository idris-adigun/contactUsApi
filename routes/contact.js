const router = require('express').Router();
const {contactMeValidation} = require('../validation/validation')
const {sendMessage} = require('../services/mailer')

//contact us route
router.post('/contact-us', (req, res) =>{
    const message = contactMeValidation(req.body);
    if(message.error){
        return res.status(404).send(message.error.details[0].message);
    }
    try{
        sendMessage(process.env.Email, process.env.Email, req.body.message, req.body.fullName)
    }
    catch(e){
        console.log(e)
    }
    res.status(200).send('Hello World');

})

module.exports = router;