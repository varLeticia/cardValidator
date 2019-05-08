const chai = require('chai'); 
const cardValidator = require('../index');
const expect = chai.expect;

describe('cardValidator()', () => {
    it('Deveria retornar true para o cartao ', () => {
        expect(cardValidator('5474357871406096')).to.equal(true);
    });
    it('Deveria retornar false para o cartao ', () => {
        expect(cardValidator('1112223334445555')).to.equal(false);
    });
    it('Deveria retornar true para o cartao ', () => {
        expect(cardValidator('5106972405380926')).to.equal(true);
    });
    it('Deveria retornar true para o cartao ', () => {
        expect(cardValidator('5474 3578 7140 6096')).to.equal(true);
    });
});
