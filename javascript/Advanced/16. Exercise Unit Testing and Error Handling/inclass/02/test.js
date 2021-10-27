const { expect } = require('chai')
const { isOddOrEven } = require('./02')

describe('Test oddOrEven', () => {
    it('Test for string', () => {
        expect(isOddOrEven(1)).to.be.undefined
        expect(isOddOrEven({})).to.be.undefined
        expect(isOddOrEven([])).to.be.undefined
    })

    it('Test if returnes odd', () => {
        expect(isOddOrEven('asd')).to.be.equal('odd')
    })

    it('Test if returns even', () => {
        expect(isOddOrEven('adcd')).to.be.equal('even')
        expect(isOddOrEven('')).to.be.equal('even')
    })

})