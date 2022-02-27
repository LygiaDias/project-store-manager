const connection = require('./connection');

const getAllProducts = async () => {
    const [result] = await connection.execute(
      'SELECT * FROM StoreManager.products',
    );
  
    return result;
  };

  const getProductsById = async (id) => {
    const [result] = await connection.execute(
      'SELECT * FROM StoreManager.products WHERE id=?', [id],
    );
    
    return result[0];
  };

  const createProduct = async (name, quantity) => {
    const [result] = await connection.execute(
      'INSERT INTO StoreManager.products(name,quantity) VALUES(?,?)',
      [name, quantity],
);
return {
  id: result.insertId,
  name,
  quantity,
};
  };

  const updateProduct = async (id, name, quantity) => {
    const [result] = await connection.execute(
      `UPDATE StoreManager.products SET name= ?, quantity =?
      WHERE id =?`, [id, name, quantity],
    );
    return result;
      };

  const deleteProduct = async (id) => {
    const [result] = await connection.execute(
      'DELETE FROM StoreManager.products WHERE id=?', [id],
    );
    return result;
  };
  
  module.exports = {
      getAllProducts,
      getProductsById, 
      createProduct,
      updateProduct,
      deleteProduct,
  };