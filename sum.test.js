const addNums = require("./sum")

test("Adds 1 & 2 to be 3", () => {
    expect(addNums(1, 2)).toBe(3)
})

test("Floating point addition", () => {
    expect(addNums(0.1, 0.2)).toBeCloseTo(0.3)
})