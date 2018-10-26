import
highestProductOfArray
from './highest-product';
describe('returns the highest product between 3 of array', () => {
    it('function returns 0 if call with no params', () => {
        expect(highestProductOfArray()).toBe(0)
    })
    it('function returns 0 if call with string', () => {
        expect(highestProductOfArray('mitra-intelligence')).toBe(0)
    })

    it('function returns 1000 if call with [10,5,20,1]', () => {
        expect(highestProductOfArray([10,5,20,1])).toBe(1000)
    })

    it('function returns 200 if call with [10,20]', () => {
        expect(highestProductOfArray([10,20])).toBe(200)
    })

    it('function returns 10 if call with [10]', () => {
        expect(highestProductOfArray([10])).toBe(10)
    })
})