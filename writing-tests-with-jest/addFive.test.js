const { default: TestRunner } = require("jest-runner")
const addFive = require('./addFive');
const add = require('./add')

test('returns the number plus 5', () => {
    expect(addFive(1)).toBe(6);
})

test('returns the sum', () => {
    expect(add(10, 5)).toBe(16);
})