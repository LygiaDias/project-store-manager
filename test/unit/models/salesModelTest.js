const { expect } = require("chai");
const sinon = require('sinon');
const connection = require('../../../models/connection');
const saleModel = require('../../../models/salesModel');


describe('Testes da camada model de Sales', () => {
    const returnObjectId =[
       
        {
            "saleId": 1,
            "date": "2022-02-28T18:18:38.000Z",
            "productId": 1,
            "quantity": 5
        }]
        
        const returnObject = 
        [
            {
                "saleId": 1,
                "date": "2022-02-28T18:18:38.000Z",
                "productId": 1,
                "quantity": 5
            },
            {
                "saleId": 1,
                "date": "2022-02-28T18:18:38.000Z",
                "productId": 2,
                "quantity": 10
            },
            {
                "saleId": 2,
                "date": "2022-02-28T18:18:38.000Z",
                "productId": 3,
                "quantity": 15
            }
        ]
 describe('Testa a função getAllSales na camada model', () => {
    before(() => {
      
      const result = [[returnObject], []];

      sinon.stub(connection, 'execute').resolves(result);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Verifica se retorna um array', async () => {
      const sale = await saleModel.getAllSales();

      expect(sale).to.be.an('array');
      
    });

    
  });

  describe('Testa a função getSalesById na camada model', () => {
    
    
    before(() => {
      
       const result = [[returnObjectId], []];

      sinon.stub(connection, 'execute').resolves(result);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Verifica se retorna o objeto pelo Id', async () => {
        const saleId = await saleModel.getSaleById(1);
  
        expect(saleId).to.be.deep.equal([returnObjectId]);
        
      });
  
  });

});
