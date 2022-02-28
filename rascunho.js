describe('Ao chamar o controller list', () => {
    
    let request = {}, response = {}, next = {};
    describe('Quando o serviço retorna um array de objetod', () => {
  
      before(() => {
        //arrange
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(productService, 'listProducts').resolves([]);
      });
  
      after(() => {
        productService.listProducts.restore();
      });
      
      it('responde a requisição com status 200', async () => {
        await productController.listProducts(request, response, next);
  
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
  
      it('res.json() é chamado passando um array', async () => {
        await productController.listProducts(request, response, next);
  
        expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
      });
    });
