const schema = require('../schemasValidations/schema');

function nameValidation(req, res, next) {
    const { name } = req.body;
    const MIN_NUMBER = 5;
    
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
} 

  if (name.length < MIN_NUMBER) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
}

    return next();
}

const validationSale = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    const [code, message] = error.message;
    return res.status(code).json({ message });
  }

  next();
};

module.exports = { nameValidation, validationSale };
