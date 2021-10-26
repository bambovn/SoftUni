const { expect, assert } = require("chai")
const { library } = require('./app')




describe('Testing calculating the price of a Book -> calcPriceOfBook', () => {
    describe('Testing invalid user input', () => {
        it('Invalid user input for the book name', () => {
            expect(() => library.calcPriceOfBook(1, 1980)).to.throw('Invalid input')
        })
        it('Invalid user input for the year', () => {
            expect(() => library.calcPriceOfBook("1", "1980")).to.throw('Invalid input')
        })

    })
    describe('Testing valid user input', () => {
        it('Test price for book after 1980', () => {
            expect(library.calcPriceOfBook('abcd', 1981)).to.be.equal(`Price of abcd is 20.00`)
        })
        it('Test price for book before 1980', () => {
            expect(library.calcPriceOfBook('abcd', 1980)).to.be.equal(`Price of abcd is 10.00`)
        })

    })

})


describe('Testing finding Book -> findBook', () => {
    describe('Testing invalid user input', () => {
        it('Test with empty input', () => {
            expect(() => library.findBook([])).to.throw('No books currently available')
        })
    })
    describe('Testing valid user input', () => {
        it('Test no such book', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'abcd')).to.be.equal('The book you are looking for is not here!')
        })
        it('Test the book is found', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Life Style')).to.be.equal('We found the book you want.')
        })

    })

})



describe('Testing arranging the Books -> arrangeTheBooks', () => {
    describe('Testing invalid user input', () => {
        it('Test not a number for the books count', () => {
            expect(() => library.arrangeTheBooks('a')).to.throw('Invalid input')
        })
        it('Test no input for the books count', () => {
            expect(() => library.arrangeTheBooks()).to.throw('Invalid input')
        })
        it('Test negative number for the books count', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input')
        })
        it('Test float number input', () => {
            expect(() => library.arrangeTheBooks(1.5)).to.throw('Invalid input')
        })


    })
    describe('Testing valid user input', () => {
        it('Test for insufficient space', () => {
            expect(library.arrangeTheBooks(41)).be.equal('Insufficient space, more shelves need to be purchased.')
        })
        it('Test for sufficient space', () => {
            expect(library.arrangeTheBooks(40)).be.equal('Great job, the books are arranged.')
        })

    })

})