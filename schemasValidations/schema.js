const Joi = require('joi');

const validation = Joi.object({
  productId: Joi.number().positive().required()
  .messages({
    'number.required': '400|"productId" is required',
    'number.positive': '422|"productId" must be greater than or equal to 1',
  }),
  quantity: Joi.number().positive().required()
  .messages({
    'number.positive': '422|"quantity" must be greater than or equal to 1',
    'number.required': '400|"quantity" is required',
  }),
});

const joi = Joi.array().items(validation);

module.exports = joi;
