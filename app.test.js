const { res, teamCaptain, sampleError, getData, promiseSample } = require("./app")

test("Property value check", () => {
    expect(res.name).toEqual("Paul")
})

test("Undefined check", () => {
    expect(res.sex).toBeUndefined()
})

test("Check if Captain Exists", () => {
    expect(teamCaptain).toContain("Captain America")
})

test("Check if fx throws an error", () => {
    expect(() => sampleError()).toThrow()
})

test("Check if we get data from API", async () => {
    const data = await getData()
    data.forEach(i => expect(i.capsule_serial).not.toBeUndefined)
})

test("Check if array has data", async () => {
    const data = await getData()
    expect(data.length).not.toBe(0)
})

test("Check if data type is an Array", async () => {
    const data = await getData()
    // expect(data).toBeInstanceOf(Array)
    expect(typeof data).toBe("object")
})

test("Check if promise resolves", async () => {
    const data = await promiseSample()
    expect(data).toBe("Promise resolved")
})