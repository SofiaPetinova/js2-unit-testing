//const assert = require('assert');
const expect = require('chai').expect // more popular
const {sum, allUpper, firstUpper} = require ('../index');

describe ('SUM', () => {
    it('calc sum with positive numbers', () => {
        expect(sum(5,7)).equal(12)
    });

    it('calc sum with negative numbers', () => {
        expect(sum(-5,-7)).equal(-12)
    });
});

describe ('ALL UPPER', () => {
    it('input all lower case', () => {
        expect(allUpper(['a', 'bc'])).eql(['A', 'BC']);
    });

    it('input all upper case', () => {
        expect(allUpper(['A', 'BC'])).eql(['A', 'BC']);
    });
});

describe ('FIRST UPPER', () => {
    it('input first lower case', () => {
        expect(firstUpper(['a', 'bc', 'abc'])).eql(['A', 'Bc', 'Abc']);
    });

    it('input first upper case', () => {
        expect(firstUpper(['A', 'Bc', 'Abc'])).eql(['A', 'Bc', 'Abc']);
    });
})


