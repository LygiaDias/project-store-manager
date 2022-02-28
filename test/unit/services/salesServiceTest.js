const sinon = require('sinon');
const { expect } = require('chai');

const saleModels = require('../../../models/salesModel');
const saleServices = require('../../../services/salesService');

describe('Testes da camada service de sales', () => {
    const objectReturn = [
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

    const returnObject =
        {
            "saleId": 1,
            "date": "2022-02-28T18:18:38.000Z",
            "productId": 1,
            "quantity": 5
        }
        
  
    describe('Testa o retorno da função getAllSales na camada services', () => {
      before(() => {
        
        
  
        sinon.stub(saleModels, 'getAllSales').resolves([ objectReturn ]);
      });
  
      after(() => {
        saleModels.getAllSales.restore();
      });
  
      it('Testa se retorna um array de objetos', async () => {
        const sale = await saleServices.listSale();
  
        expect(sale).to.be.an('array');
        
      });
  
      
    });
    
    

      describe('Testa a funão getSaleId na camada service ', () => {
    
        
        before(() => {
           sinon.stub(saleModels,'getSaleById').resolves(returnObject);
        });
    
        after(() => {
          saleModels.getSaleById.restore();
        });
    
        it('Verifica se retorna o objeto pelo Id', async () => {
            const saleId = await saleServices.getSaleId(1);
      
            expect(saleId).to.be.deep.equal(returnObject);
            
          });
        
      });
        
    
      
  });