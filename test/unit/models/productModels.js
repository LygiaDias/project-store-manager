const { expect } = require("chai");
const sinon = require('sinon');
const connection = require('../../../models/connection');
const productModel = require('../../../models/productModel');


describe('Testes da camada model de products', () => {
  

  describe('Testa a função getAllProducts na camada model', () => {
    before(() => {
      const returnObject = [
        {
          "id": 1,
          "name": "Martelo de Thor",
          "quantity": 10
        },
        {
          "id": 2,
          "name": "Traje de encolhimento",
          "quantity": 20
        },
        {
          "id": 3,
          "name": "Escudo do Capitão América",
          "quantity": 30
        }
      ];
      const result = [[returnObject], []];

      sinon.stub(connection, 'execute').resolves(result);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Verifica se retorna um array', async () => {
      const product = await productModel.getAllProducts();

      expect(product).to.be.an('array');
      
    });

    
  });

  describe('Testa a função getProductId na camada model', () => {
    
    const returnObject =
        {
          "id": 1,
          "name": "Martelo de Thor",
          "quantity": 10
        }
    
    before(() => {
      
       const result = [[returnObject], []];

      sinon.stub(connection, 'execute').resolves(result);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Verifica se retorna o objeto pelo Id', async () => {
      const productId = await productModel.getProductsById(1);

      expect(productId).to.be.deep.equal(returnObject);
      
    });

    
  });

});
