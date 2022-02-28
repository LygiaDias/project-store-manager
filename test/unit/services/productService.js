const sinon = require('sinon');
const { expect } = require('chai');

const productModels = require('../../../models/productModel');
const productServices = require('../../../services/productService');

describe('Testes da camada service de products', () => {
    const objectReturn = [
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
      
      const returnObject =
      {
        "id": 1,
        "name": "Martelo de Thor",
        "quantity": 10
      }
    describe('Testa o retorno da função getAllProducts na camada service', () => {
      before(() => {
        
        
  
        sinon.stub(productModels, 'getAllProducts').resolves([ objectReturn ]);
      });
  
      after(() => {
        productModels.getAllProducts.restore();
      });
  
      it('Testa se retorna um array de objetos', async () => {
        const products = await productServices.listProducts();
  
        expect(products).to.be.an('array');
        
      });
  
      
    });
    

      describe('Testa a função getProductsById na camada service', () => {
    
        before(() => {
          
            sinon.stub(productModels,'getProductsById').resolves(returnObject);
        });
    
        after(() => {
          productModels.getProductsById.restore();
        });
    
        it('Verifica se retorna o objeto pelo Id', async () => {
            const productId = await productServices.getProductId(1);
      
            expect(productId).to.be.deep.equal(returnObject);
            
          });
        
      });
    
      
  });


