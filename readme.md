# Unit Testing with Jest

## Objective

Jest is a library which allows us to build tests within JavaScript. Unit tests are quickly becoming the standard within software development lifecycle (SDLC). They quickly uncover the most common type of error which interpreters or parsers cannot warn us about -- logic error.

## Getting Started

- Jest is installed as a dev dependency within the project in which we're working. Do this by running `npm i --save-dev jest`. This will install Jest as a dev dependency.
- Add a script to your `package.json` to include a test command
- Create a `sum.js` file with the following code:
```js
let addNums = (x, y) => {
    return x + y
}

module.exports = addNums
```
- Create a `sum.test.js` file. This file holds the unit test or tests for a particular file. This naming standard is *necessary* for Jest to understand where the unit tests are.
- Inside this file, type the following code:
```js
const addNums = require("./sum")

test("Adds 1 & 2 to be 3", () => {
    expect(addNums(1, 2)).toBe(3)
})
```
- `test()` function takes a str parameter and a callback function
- Str outlines the definition of the unit test
- Callback fx is used to perform the test
    - `expect()` is an expectation object where we invoke the object we want to test.
    - `toBe()` is one of many matchers to check against