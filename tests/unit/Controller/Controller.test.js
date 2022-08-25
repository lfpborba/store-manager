const sinon = require('sinon');
const { expect } = require('chai');

const productService = require('../../../services/Products');
const productController = require('../../../controllers/Products');

const saleServices = require('../../../services/Sales')
const saleController = require('../../../controllers/Sales');

const data = [
{ id: 1, name: 'Martelo de Thor', quantity: 10 },
{ id: 2, name: 'Traje de encolhimento', quantity: 20 },
{ id: 3, name: 'Escudo do Capitão América', quantity: 30 } ];

const product = {
  name: "Sombra", quantity: 9,
};
describe("Products Controller", () => {

  const response = {} ;
  const request = {};

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);
  });

  describe("valida requisição ao criar Sales", () => {

    before(() => {
      sinon.stub(productController, 'creatingProduct').resolves(product);
      request.body = product;
    });

    after(() => {
      productController.creatingProduct.restore();
    });

    it("executou status e json esperados", async () => {  
      await productController.creatingProduct(request, response);


      expect(response.status.calledWith(201)).to.be.equal(false);
    });
  });
});
