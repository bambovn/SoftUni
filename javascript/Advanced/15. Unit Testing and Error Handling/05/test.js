// To test function we have to import the coresponding function
// To use chai for unit testing we have to import it

const { expect } = require('chai') // importing chai 
const isSymmetric = require('./symmetry') // importing the file, in this case only one function to test




describe('Symmetry checker', () => {

    it('returns true for symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true
    })

    it('returns false for non symmetry array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false
    })

    it('returns false for non-array', () => {
        expect(isSymmetric(5)).to.be.false
    })

    it('returs false for type different symmetric array', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false
    })


    // Test overloading

    it('returns true for symmetric array with odd number of elements', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true
    })

    it('returns true for symmetric array with strings elements', () => {
        expect(isSymmetric(["a", "b", "b", "a"])).to.be.true
    })

})