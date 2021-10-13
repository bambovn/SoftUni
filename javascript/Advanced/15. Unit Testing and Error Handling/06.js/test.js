const { expect } = require("chai")
const rgbToHexColor = require('./rgb-to-hex')


describe('RGB Converter', () => {


    describe('Happy case', () => {

        it('converts white', () => {
            expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF')
        })

        it('converts black', () => {
            expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000')
        })

        it('converts dark blue', () => {
            expect(rgbToHexColor(12, 213, 122)).to.be.equal('#0CD57A')
        })

    })

    describe('Unhappy case', () => {

        it('returns undefind for missing parameters', () => {
            expect(rgbToHexColor(255, 255,)).to.be.undefined
        })

        it('returns undefind for values out of range', () => {
            expect(rgbToHexColor(555, 5255, 552)).to.be.undefined
        })

        it('returns undefind for negative values', () => {
            expect(rgbToHexColor(-1, -1, -1)).to.be.undefined
        })

        it('returns undefind for invalid parameter type', () => {
            expect(rgbToHexColor('0', '0', '0')).to.be.undefined
        })

    })
})