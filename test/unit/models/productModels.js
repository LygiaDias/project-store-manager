const { expect } = require("chai");
const sinon = require('sinon');
const connection = require('../../../models/connection');
const productModel = require('../../../models/productsModel');

describe('Função getAllProducts', () => {
  
  describe('Testa se retorn resposta do banco de dados', () => {
    before(() => {
      const response ={
		"id": 1,
		"name": "Martelo de Thor",
		"quantity": 10
	}
sinon.stub(connection, 'execute').resolves(response);
    });

    after(() => {
      connection.execute.restore();
    });

   
    it('cada objeto no array deve ter as chaves id, name, quantity, ', async () => {
      const products = await productModel.getAllProducts();

      expect(products).not.to.be.empty;
      products.forEach(p => expect(p).to.include.all.keys('id', 'name', 'quantity'));
    });
  });
});
