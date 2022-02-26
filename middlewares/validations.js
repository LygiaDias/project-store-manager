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

function quantityValidation(req, res, next) {
    const { quantity } = req.body;
    
    if (!quantity) {
    return res.status(400).json({ message: '"quantity" is required' });
} 

  if (quantity < 1) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
}

    return next();
}

function productIdValidation(req, res, next) {
  const { productId } = req.body;
  
if (!productId) {
  return res.status(400).json({ message: '"productId" is required' });
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

module.exports = { nameValidation, quantityValidation, productIdValidation, validationSale };
