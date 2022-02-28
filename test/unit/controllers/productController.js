const sinon = require("sinon");
const { expect } = require("chai");

const productService = require('../../../services/productService');
const productController = require("../../../controllers/productsController");


describe('Testa a camada controller de products', () => {
    
    let request = {}, 
    response = {};
    
    
    describe('Testa o retorno de getAllProducts na camada controller', () => {
  
      before(() => {
       
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(productService, 'listProducts').resolves([]);
      });
  
      after(() => {
        productService.listProducts.restore();
      });
      
      it('Se o JSON é chamado pasando um array', async () => {
        await productController.listProducts(request, response);
  
        expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
      });
    
      
      it('Testa se retorna o status 200 corretamente', async () => {
        await productController.listProducts(request, response);
  
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
  
     
    });
  });