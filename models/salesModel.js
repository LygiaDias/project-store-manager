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

const createSale = async (array) => {
const [sale] = await connection.execute('INSERT INTO StoreManager.sales (date) VALUES(NOW())');
const saleComplete = sale.insertId;

await array.forEach(({ productId, quantity }) => {
  connection
  .execute('INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity)VALUES(?,?,?)', 
  [saleComplete, productId, quantity]);
});
return {
  id: saleComplete,
  itemsSold: array,
};
};

const updateSale = async (id, array) => {
  const { productId, quantity } = array[0];
  const [result] = await connection
  .execute('UPDATE StoreManager.sales_products SET product_id = ?,quantity = ? WHERE sale_id = ?', 
  [productId, quantity, id]);
  const resultComplete = result.insertId;

  return {
    saleId: resultComplete,
    itemUpdated: array,
  };
};
module.exports = {
      getAllSales,
      getSaleById, 
      createSale,
      updateSale,
  };