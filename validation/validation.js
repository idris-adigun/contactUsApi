const Joi = require('joi');

const contactMeValidation = (data) => {
    const schema = Joi.object({
        fullName: Joi.string()
            .min(2)
            .required(),
        email: Joi.string()
            .min(6)
            .email(),
        message: Joi.string()
            .min(3)
            .required()
    })
    return schema.validate(data);
}

module.exports = {
    contactMeValidation
}