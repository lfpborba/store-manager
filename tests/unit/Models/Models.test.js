const sinon = require('sinon');

const { expect } = require('chai');

const connection = require('../../../models/Connections');
const productModel = require('../../../models/Products');
const salesModels = require('../../../models/Sales')

const mock = [
  {
    "saleId": 1,
    "date": "2022-08-24T19:51:54.000Z",
    "productId": 1,
    "quantity": 2
  },
  {
    "saleId": 1,
    "date": "2022-08-24T19:51:54.000Z",
    "productId": 2,
    "quantity": 2
  }
]
const RETURN = [
  {"id":1,"name":"Martelo de Thor","quantity":10},
  {"id":2,"name":"Traje de encolhimento","quantity":20},
  {"id":3,"name":"Escudo do Capitão América","quantity":30}
];

describe('testa getAll, Products', () => {
  before(async () =>  {
    const execute = [RETURN];
    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  });
  it('deve retornar um array de produtos', async () => {
    const result = await productModel.getAll();
    expect(result).to.be.an('array');
    expect(result).to.have.lengthOf(3);
    expect(result[0]).to.have.property('id');
    expect(result[0]).to.have.property('name');
    expect(result[0]).to.have.property('quantity');
  });
});

describe('testa getByid', () => {
  before(async () =>  {
    const execute = [RETURN];
    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  });
  it('deve retornar um array de produtos', async () => {
    const result = await productModel.getProductById(1);
    expect(result).to.be.an('object');
  });
})


describe('Testa getAll, sales', () => {
  before(async () => {
    const execute = [mock];
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });
  it('', async () => {
    const result =  await salesModels.getAll();
    expect(result).to.be.an('array');
    expect(result).to.have.lengthOf(2);
    expect(result[0]).to.have.property('saleId');
    expect(result[0]).to.have.property('date');
    expect(result[0]).to.have.property('productId');
    expect(result[0]).to.have.property('quantity')
  });
});

describe('testa getbyID', () => {
  before(async () => {
    const execute = [mock];
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });
  it('', async () => {
    const result =  await salesModels.getSalesById(1);
    expect(result).to.be.an('array');
    expect(result).to.have.lengthOf(2);
    expect(result[0]).to.have.property('saleId');
    expect(result[0]).to.have.property('date');
    expect(result[0]).to.have.property('productId');
    expect(result[0]).to.have.property('quantity')
  });
})