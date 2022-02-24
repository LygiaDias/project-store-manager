const connection = require('./connection');

const getAllSales = async () => {
  const [result] = await connection.execute(`
  SELECT 
    sales.id AS saleId,
      sales.date,
      product.product_id AS productId,
      product.quantity
  FROM
    sales 
  INNER JOIN
    sales_products AS product
      ON sales.id = product.sale_id;
`);

  return result;
};

  const getSaleById = async (id) => {
    const [result] = await connection.execute(
      `
    SELECT 
      sales.date,
        product.product_id AS productId,
        product.quantity
    FROM
      sales 
    INNER JOIN
      sales_products AS product
        ON sales.id = product.sale_id
        WHERE sales.id = ?;
  `, [id],
    );
    
    return result;
  };

  module.exports = {
      getAllSales,
      getSaleById, 
  };