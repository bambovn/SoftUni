const {expect, assert} = require('chai')

const { sum } = require('./myModule')

describe('Demo Test', () => {

    it('works with 5 and 3', () =>{ 
        assert.equal(sum(5, 3), 8)
        //expect(sum(5, 3)).to.equal(9)
    })


})