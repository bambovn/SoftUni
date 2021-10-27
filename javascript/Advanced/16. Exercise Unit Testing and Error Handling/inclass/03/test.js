const { expect } = require('chai')
const { lookupChar } = require('./charLookUp')



describe("Test function charLookUp", () => {

    describe('Happy case testing' , () => {

        it('User is typing correct data', () =>{
            expect(lookupChar('abcd', 1)).to.be.equal('b')
            expect(lookupChar('abcd', 0)).to.be.equal('a')
        })
    })


    describe('Unhappy case testing', () =>{

        it('Unhappy testing', () => {

            expect(lookupChar(1234, 1)).to.be.undefined
            expect(lookupChar(1234, 1.1)).to.be.undefined
            expect(lookupChar('abcd', 1.1)).to.be.undefined
            expect(lookupChar('abcd', 12)).to.be.equal("Incorrect index")
            expect(lookupChar('abcd', -12)).to.be.equal("Incorrect index")
        })

    })
})

