const { expect } = require("chai")
const { createCalculator } = require('./addSubtract')


describe('Calculator testing', () => {

    let instance = null
    beforeEach(() => {
        instance = createCalculator()
    })


    it('Hase all methods', () => {
        expect(instance).to.has.ownProperty('add')
        expect(instance).to.has.ownProperty('subtract')
        expect(instance).to.has.ownProperty('get')
    })

    it('Add number', () => {
        instance.add(1)
        expect(instance.get()).to.equal(1)

    })

    it('Add multiple numbers', () => {
        instance.add(1)
        instance.add(2)
        expect(instance.get()).to.equal(3)
    })

    it('Add subtract', () => {
        instance.subtract(1)
        expect(instance.get()).to.equal(-1)
    })

    it('Add subtract multiple numbers', () => {
        instance.subtract(1)
        instance.subtract(2)
        expect(instance.get()).to.equal(-3)
    })

    it('Add subtract and add numbers', () => {
        instance.add(1)
        instance.subtract(2)
        expect(instance.get()).to.equal(-1)
    })

    it('Initiallization start', () => {
        expect(instance.get()).to.equal(0)
    })


    it('Add subtract and add numbers as strings', () => {
        instance.add('1')
        instance.add('2')
        instance.subtract('4')
        expect(instance.get()).to.equal(-1)
    })

})